// Publish `main` to both GitHub repos.
//
//   origin    → Max-Octopov/Women-in-Poker   commits as authored (Max Octopov)
//   portfolio → personal women-in-poker-2    same trees & messages, re-signed with the
//                                             personal identity from the global git config,
//                                             so Vercel (personal Hobby account) deploys them.
//
// The re-signed history is built deterministically (same dates, trees and messages), so
// re-running the script reproduces the same hashes and only new commits are added.
//
// Usage: npm run deploy

import { execFileSync } from "node:child_process";

const git = (args, opts = {}) =>
  execFileSync("git", args, { encoding: "utf8", stdio: ["pipe", "pipe", "inherit"], ...opts }).trim();

const branch = "main";

if (git(["status", "--porcelain"])) {
  console.error("Uncommitted changes — commit them first.");
  process.exit(1);
}

const name = git(["config", "--global", "user.name"]);
const email = git(["config", "--global", "user.email"]);
if (!name || !email) {
  console.error("Set the personal identity first: git config --global user.name / user.email");
  process.exit(1);
}

console.log(`→ origin (${branch})`);
execFileSync("git", ["push", "origin", branch], { stdio: "inherit" });

// Rebuild the history with the personal identity.
const map = new Map();
let tip = "";
for (const sha of git(["rev-list", "--reverse", "--topo-order", branch]).split("\n")) {
  const [tree, parents, aDate, cDate] = git(["log", "-1", "--date=raw", "--format=%T%n%P%n%ad%n%cd", sha]).split("\n");
  const message = git(["log", "-1", "--format=%B", sha]);
  const parentArgs = parents ? parents.split(" ").flatMap((p) => ["-p", map.get(p)]) : [];
  tip = execFileSync("git", ["commit-tree", tree, ...parentArgs, "-F", "-"], {
    input: message + "\n",
    encoding: "utf8",
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: name,
      GIT_AUTHOR_EMAIL: email,
      GIT_AUTHOR_DATE: aDate,
      GIT_COMMITTER_NAME: name,
      GIT_COMMITTER_EMAIL: email,
      GIT_COMMITTER_DATE: cDate,
    },
  }).trim();
  map.set(sha, tip);
}

console.log(`→ portfolio (${branch} as ${tip.slice(0, 7)})`);
execFileSync("git", ["push", "--force", "portfolio", `${tip}:refs/heads/${branch}`], { stdio: "inherit" });
console.log("Done. Vercel will deploy the portfolio commit automatically.");
