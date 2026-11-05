// Site text lives in site.json so it can be edited in Pages CMS (Site settings).
import data from './site.json';
import navRaw from './nav.json';
const navData = navRaw.tabs;

export const site = {
  name: data.name,
  fullName: data.fullName,
  tagline: data.tagline,
  philosophy: data.philosophy,
  email: data.email,
};

// Menu tabs live in nav.json so they can be renamed, reordered (by position) or hidden in Pages CMS.
export const nav = navData
  .map((item, i) => ({ ...item, pos: Number(item.position) || i + 1 }))
  .filter((item) => item.show !== false)
  .sort((a, b) => a.pos - b.pos)
  .map(({ label, href }) => ({ label, href }));

export const { shortBio, bio, quickFacts, principles, hard, stats, timeline } = data;
