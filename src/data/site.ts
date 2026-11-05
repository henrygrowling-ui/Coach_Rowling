// Site text lives in site.json so it can be edited in Pages CMS (Site settings).
import data from './site.json';
import navData from './nav.json';

export const site = {
  name: data.name,
  fullName: data.fullName,
  tagline: data.tagline,
  philosophy: data.philosophy,
  email: data.email,
};

// Menu tabs live in nav.json so they can be renamed, reordered or hidden in Pages CMS.
export const nav = navData.filter((item) => item.show !== false).map(({ label, href }) => ({ label, href }));

export const { shortBio, bio, quickFacts, principles, hard, stats, timeline } = data;
