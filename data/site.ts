// Single place for every link and fact used on the page.
// TODO markers = waiting on answers from Victoria.

export const site = {
  name: "Women in Poker",
  url: "https://go.octopipoker.ai/womeninpoker/",
  tagline: "A global poker community for women",
  description:
    "Women in Poker is a global community for women who play poker, with a free education program built in: the My First Solver course, monthly video lectures with coach Victoria Livschitz, weekly practice, a private Discord and an Octopi group. Founded by Octopi Poker and Ladies of the Hippodrome League.",

  // All "Join now" buttons. TODO: confirm with Victoria.
  joinUrl: "https://octopipoker.ai/groups/invite/t_TD1IRiWFiP7XOchKRn5A",
  promoCode: "Poker4Women",
  discordUrl: "https://discord.gg/octopipoker",

  lecture: {
    rule: "First Wednesday of every month",
    timePT: "10:00 AM PT",
    // 10:00 PST = 18:00 UTC. All dates below fall in PST (DST starts Mar 14, 2027).
    datesUtc: [
      "2026-12-02T18:00:00Z",
      "2027-01-06T18:00:00Z",
      "2027-02-03T18:00:00Z",
      "2027-03-03T18:00:00Z",
    ],
  },
} as const;

// The education program that comes with membership — five parts.
export const program = [
  {
    n: "I",
    title: "My First Solver Course",
    tag: "Free course",
    text: "Free. Learn solver study from scratch.",
  },
  {
    n: "II",
    title: "Monthly Video Lectures",
    tag: "Free · Recorded",
    text: "Live with Victoria. Recorded for members.",
  },
  {
    n: "III",
    title: "Weekly Homework Study",
    tag: "Drills & quizzes",
    text: "Drills and quizzes to practice.",
  },
  {
    n: "IV",
    title: "Private Community Discord",
    tag: "Members only",
    text: "Ask questions. Talk hands with other women.",
  },
  {
    n: "V",
    title: "Private Octopi Group",
    tag: "Inside Octopi Poker",
    text: "Your study space inside Octopi Poker.",
  },
] as const;

export const people = [
  {
    initials: "VL",
    name: "Victoria Livschitz",
    role: "Your Coach",
    org: "Octopi Poker",
    photo: "images/coach-victoria.webp",
    photoClass: "",
    points: [
      { icon: "octopus", text: "Co-Founder of Octopi Poker" },
      { icon: "spade", text: "Professional Poker Player" },
      { icon: "trophy", text: "$3.3 Million Career Winnings" },
      { icon: "star", text: "4 PGT / EPT Titles" },
    ],
  },
  {
    initials: "KC",
    name: "Kerryjane Craigie",
    role: "Co-founder & Partner",
    org: "Ladies of the Hippodrome League",
    photo: "images/coach-kerryjane.webp",
    // source photo has a cream rounded frame baked in — zoom slightly to crop it out
    photoClass: "scale-[1.07]",
    // TODO: real bio
    bio: "Kerryjane brings the Ladies of the Hippodrome League community to Women in Poker, connecting women players in the UK and beyond.",
  },
] as const;

export const faq = [
  {
    q: "Who can join?",
    a: "Women from anywhere in the world, at any level — from your first hands to years at the table. There are no experience requirements.",
  },
  {
    q: "Is this a poker course?",
    a: "Not exactly. Women in Poker is a community first — a place to meet, talk and play with other women. Membership comes with a free education program: a starter course, monthly lectures and weekly practice.",
  },
  {
    q: "Is it really free?",
    // TODO: confirm subscription wording with Victoria
    a: "Yes. The My First Solver course and the monthly lectures are free. The Women in Poker group lives inside Octopi Poker, so if you don't have an Octopi subscription yet you'll be offered one when you open the invite — use code Poker4Women at checkout.",
  },
  {
    q: "When are the lectures?",
    a: "On the first Wednesday of every month at 10:00 AM Pacific Time, starting December 2, 2026. Dial-in details are sent to members separately, and recordings are shared after each session.",
  },
  {
    q: "How do I join the Discord?",
    a: "Our private Discord is where the community talks hands, asks questions and keeps in touch between lectures. Join here:",
    link: { href: site.discordUrl, label: "discord.gg/octopipoker" },
  },
  {
    q: "Can I leave?",
    a: "Of course. Membership is voluntary — join whenever you like and leave at any time.",
  },
] as const;
