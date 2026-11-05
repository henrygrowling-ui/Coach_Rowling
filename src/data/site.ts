// Site text lives in site.json so it can be edited in Pages CMS (Site settings).
import data from './site.json';

export const site = {
  name: data.name,
  fullName: data.fullName,
  tagline: data.tagline,
  philosophy: data.philosophy,
  email: data.email,
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

export const { shortBio, bio, quickFacts, principles, hard, stats, timeline } = data;
