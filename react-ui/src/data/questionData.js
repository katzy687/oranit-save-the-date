import shakira from '../assets/audio/chantaje_snip.mp3';

export const questionData = [
  {
    id: 0,
    text: 'איזה שיר יתנגן אחרי שבירת הכוס?',
    choices: [
      {
        id: 'a',
        text: 'James Brown - I Feel Good',
        audioURL: shakira,
        imgUrl: 'https://img.discogs.com/Kk29cZfdl9D4P6pB79JpmVIVh1Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2581662-1473059731-6886.jpeg.jpg'
      },
      {
        id: 'b',
        text: 'Beach Boys - Wouldn\'t It Be Nice',
        imgUrl: 'https://i.ytimg.com/vi/nZBKFoeDKJo/hqdefault.jpg'
      },
      {
        id: 'c',
        text: 'Omer Adam - Hopa',
        imgUrl: 'http://e-cdn-images.deezer.com/images/artist/09d6f6bbf203afdf26484d2b7ea113df/200x200-000000-80-0-0.jpg'
      },
      {
        id: 'd',
        text: '2pac - I Get Around',
        imgUrl: 'https://img.discogs.com/ds8DN4utQARORIb51Ju__80TqOk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-100752-1405652458-6549.jpeg.jpg'
      }
    ],
    correct: 'b'
  },
  {
    id: 1,
    text: 'Which company mantains ReactJS',
    choices: [
      {
        id: 'a',
        text: 'Google',
      },
      {
        id: 'b',
        text: 'Facebook',
      },
      {
        id: 'c',
        text: 'Airbnb',
      }
    ],
    correct: 'b'
  },
  {
    id: 2,
    text: 'Is it an antipattern to include props in the getInitialState method of a component?',
    choices: [
      {
        id: 'a',
        text: 'Yes',
      },
      {
        id: 'b',
        text: 'No',
      },
    ],
    correct: 'a'
  },
  {
    id: 3,
    text: 'Is ReactJS a framework by itself?',
    choices: [
      {
        id: 'a',
        text: 'Yes',
      },
      {
        id: 'b',
        text: 'No',
      },
    ],
    correct: 'b'
  }
];