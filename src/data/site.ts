// Site-wide settings. Edit these to change the menu, principles and career numbers.

export const site = {
  name: 'Coach Rowling',
  fullName: 'Henry Rowling',
  tagline: 'High school football and baseball coach',
  // One-line coaching philosophy shown in the homepage hero.
  philosophy: 'Build young men who compete with discipline, play for each other, and leave the program better than they found it.',
  email: 'coach@example.com', // TODO: replace with your real contact email
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'RedClay Way', href: '/redclay-way/' },
  { label: 'Playbook', href: '/playbook/' },
  { label: 'Thoughts', href: '/thoughts/' },
  { label: 'Media', href: '/media/' },
  { label: 'Contact', href: '/contact/' },
];

// Core principles band on the homepage. Placeholder wording: rewrite in your own words.
export const principles = [
  { title: 'Effort Is a Choice', text: 'Talent varies. Effort and attitude are the two things every player controls, every rep.' },
  { title: 'Do Your Job', text: 'Know your assignment, execute it, and trust the man next to you to do his.' },
  { title: 'Earn It Daily', text: 'Nothing carries over from yesterday. Spots, trust and wins are earned again today.' },
  { title: 'Next Play', text: 'Mistakes happen. Own it, learn from it and be ready for the next snap or pitch.' },
  { title: 'Team Before Me', text: 'The program is bigger than any one player, coach or season.' },
  { title: 'Student First', text: 'Grades, character and how you treat people matter more than any scoreboard.' },
];

// Career at a glance. Placeholder numbers: replace with your real record.
export const stats = [
  { value: 'XX', label: 'Seasons coaching' },
  { value: 'XXX', label: 'Career wins' },
  { value: 'X', label: 'Championships' },
  { value: 'XXX+', label: 'Players coached' },
];

// Career timeline on the About page. Placeholder entries.
export const timeline = [
  { year: '20XX', title: 'Started coaching', text: 'First assistant role. Replace with your real history.' },
  { year: '20XX', title: 'Head baseball coach', text: 'Took over the baseball program.' },
  { year: '20XX', title: 'Football staff', text: 'Joined or led the football staff.' },
  { year: '20XX', title: 'Milestone season', text: 'A season or moment worth remembering.' },
];
