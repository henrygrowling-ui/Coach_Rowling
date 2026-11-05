// Photo list lives in photos.json so it can be edited in Pages CMS (Photos).
import raw from './photos.json';
const data = raw.photos;

export interface Photo { file: string; alt: string; caption: string; sport: string; }

export const photos: Photo[] = data
  .filter((p) => p.image)
  .map((p) => ({
    file: p.image.split('/').pop() ?? '',
    alt: p.alt || p.caption,
    caption: p.caption,
    sport: p.sport,
  }));
