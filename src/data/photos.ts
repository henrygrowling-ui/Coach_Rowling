// Photos live in public/images/photos/. Add a file there and a line here to use it.
export interface Photo { file: string; alt: string; caption: string; sport: 'Football' | 'Baseball' | 'Family'; }

export const photos: Photo[] = [
  { file: 'fist-bump.jpg', alt: 'Coach Rowling fist-bumping a player on the field', caption: 'Celebrating with a player', sport: 'Football' },
  { file: 'celebration.jpg', alt: 'Coach Rowling celebrating with players after a big play', caption: 'Big play celebration', sport: 'Football' },
  { file: 'team-walkout.jpg', alt: 'Coach Rowling walking out with the team past the American flag', caption: 'Team walkout', sport: 'Football' },
  { file: 'player-coaching.jpg', alt: 'Coach Rowling talking with a player on the sideline', caption: 'Coaching on the sideline', sport: 'Football' },
  { file: 'sideline-headset.jpg', alt: 'Coach Rowling in a headset talking to a player', caption: 'On the headset', sport: 'Football' },
  { file: 'sideline-coaching.jpg', alt: 'Coach Rowling coaching a player on the sideline', caption: 'Between series', sport: 'Football' },
  { file: 'sideline-headset-2.jpg', alt: 'Coach Rowling on the headset during a game', caption: 'Game day', sport: 'Football' },
  { file: 'sideline-night.jpg', alt: 'Coach Rowling signaling from the sideline at a night game', caption: 'Friday night signals', sport: 'Football' },
  { file: 'sideline-night-2.jpg', alt: 'Coach Rowling on the sideline with the team at night', caption: 'Friday night lights', sport: 'Football' },
  { file: 'pregame-field.jpg', alt: 'Coach Rowling on the field before a game', caption: 'Pregame', sport: 'Football' },
  { file: 'sideline-signals.jpg', alt: 'Coach Rowling signaling in the defense from the sideline', caption: 'Calling the defense', sport: 'Football' },
  { file: 'baseball-mound-visit.jpg', alt: 'Coach Rowling on the baseball field during a game', caption: 'On the diamond', sport: 'Baseball' },
  { file: 'baseball-field.jpg', alt: 'Coach Rowling and another coach walking the baseball field', caption: 'Baseball season', sport: 'Baseball' },
  { file: 'family.jpg', alt: 'Coach Rowling with his wife and daughter on the field', caption: 'Family on the field', sport: 'Family' },
];
