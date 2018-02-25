// question 1 imports
import james from '../assets/audio/james-brown-snip.mp3';
import hopa from '../assets/audio/hopa.mp3';
import zachit from '../assets/audio/zachit-snip.mp3';
import moreThan from '../assets/audio/more-than-snip.mp3';

// question 3 songs
import hipHop from '../assets/audio/wild-thots-snip.mp3';
import reggaeton from '../assets/audio/nicky-snip.mp3';
import mizrachi from '../assets/audio/shluky-snip.mp3';
import dance from '../assets/audio/tiesto-snip.mp3';



export const questionData = [
  {
    id: 0,
    text: 'איזה שיר יתנגן אחרי שבירת הכוס?',
    choices: [
      {
        id: 'a',
        text: 'James Brown - I Feel Good',
        audioURL: james,
        imgUrl: 'https://img.discogs.com/Kk29cZfdl9D4P6pB79JpmVIVh1Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2581662-1473059731-6886.jpeg.jpg'
      },
      {
        id: 'b',
        text: 'דדי דדון - זכית בי',
        audioURL: zachit,
        imgUrl: 'https://images1.ynet.co.il/PicServer5/2017/04/25/7739200/9050495_9050821_rumble.jpg'
      },
      {
        id: 'c',
        text: 'Omer Adam - Hopa',
        audioURL: hopa,
        imgUrl: 'http://e-cdn-images.deezer.com/images/artist/09d6f6bbf203afdf26484d2b7ea113df/200x200-000000-80-0-0.jpg'
      },
      {
        id: 'd',
        text: 'More Than You Know',
        audioURL: moreThan,
        imgUrl: 'https://images.genius.com/948d4857df57fe12f9bed717a6d2a2ee.1000x1000x1.jpg'
      }
    ],
    correct: 'b'
  },
  {
    id: 1,
    text: 'איזה אוכל הוא המאנץ׳ הכי טוב לאפטר פארטי ?',
    choices: [
      {
        id: 'a',
        text: 'כריך רוסטביף מעושן',
        imgUrl: 'http://images.meredith.com/bhg/images/recipe/p_38658.jpg'
      },
      {
        id: 'b',
        text: 'מיני המבורגר',
        imgUrl: 'http://www.burgersbar.co.il/wp-content/uploads/2012/05/mini.jpg'
      },
      {
        id: 'c',
        text: 'בורקסים וג׳יחנון',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/9b/b5/e5/9bb5e51750280e57a1a356ff64880e64.jpg'
      },
      {
        id: 'd',
        text: 'סביח',
        imgUrl: 'https://i.pinimg.com/236x/1e/14/d9/1e14d9d0dff5cb86c5c814133610e637--israel-travel-israel-food.jpg'
      }
    ],
    correct: 'a'
  },
  {
    id: 2,
    text: 'איזה מוסיקה תקפיץ לכם את המוד ברחבה ?',
    choices: [
      {
        id: 'a',
        text: 'היפ הופ',
        imgUrl: 'https://pmcvariety.files.wordpress.com/2017/08/hiphop_gif12.gif?w=500&h=281&crop=1',
        audioURL: hipHop
      },
      {
        id: 'b',
        text: 'רגאטון',
        imgUrl: 'https://pm1.narvii.com/6720/eeec7e72e821fc8ee9d1c5bfc4c3e11d6b641b62_hq.jpg',
        audioURL: reggaeton
      },
      {
        id: 'c',
        text: 'מזרחית',
        imgUrl: 'http://img.mako.co.il/2012/04/25/eyal_golan_sultan_c.jpg',
        audioURL: mizrachi
      },
      {
        id: 'd',
        text: 'דאנס ',
        imgUrl: 'http://www.mooremusicmedia.com/wp-content/uploads/2017/01/Dance-Music-Is-Essential-for-your-Lifestyle.jpg',
        audioURL: dance
      },
    ],
    correct: 'c'
  },
  {
    id: 3,
    text: 'איזה אלכוהול תעדיפו?',
    choices: [
      {
        id: 'a',
        text: 'קוקטייל',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnuxSgTyE-B-AFCwnrxNlvGIEKLWybXls0enf6LvcS0u03HSR'
      },
      {
        id: 'b',
        text: 'וודקה רד בול',
        imgUrl: 'http://p2.trrsf.com/image/fget/cf/600/600/images.terra.com/2014/12/30/istock-bebidas-energeticas-alcohol.jpg'
      },
      {
        id: 'c',
        text: 'בירה',
        imgUrl: 'https://farm9.static.flickr.com/8459/8011749922_f6ba32a7ee_b.jpg'
      },
      {
        id: 'd',
        text: 'שוט',
        imgUrl: 'https://static.vinepair.com/wp-content/uploads/2015/11/history-shot-inside-header.jpg'
      }
    ],
    correct: 'd'
  },
  {
    id: 4,
    text: 'מה שם הכלב של בן ואורנית:',
    choices: [
      {
        id: 'a',
        text: 'לאו',
        imgUrl: 'http://www.short-funny.com/dog-jokes.jpg'
      },
      {
        id: 'b',
        text: 'ליאו',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/cd/d3/8b/cdd38bc027f3148eb138cc0fb14e330c.jpg'
      },
      {
        id: 'c',
        text: 'לולי',
        imgUrl: 'http://albums.karike.com/s3/1/5/0/150b1121147.jpg'
      },
      {
        id: 'd',
        text: 'לואי',
        imgUrl: 'http://ladog.co.il/wp-content/uploads/Depositphotos_49341961_l-2015-1024x1024.jpg'
      }
    ],
    correct: 'd'
  }
];


export const dummyDBData = [
  {
    answers: ['a', 'b', 'c', 'a'],
    score: 4
  },
  {
    answers: ['a', 'b', 'c', 'd'],
    score: 3
  },
  {
    answers: ['c', 'a', 'd', 'd'],
    score:2
  },
  {
    answers: ['a', 'a', 'd', 'd'],
    score:2
  },
  {
    answers: ['a', 'a', 'd', 'd'],
    score:2
  },
  {
    answers: ['d', 'a', 'd', 'c'],
    score:2
  },
  {
    answers: ['d', 'a', 'd', 'd'],
    score:2
  },
  {
    answers: ['d', 'a', 'd', 'c'],
    score:2
  },
  {
    answers: ['a', 'a', 'd', 'd'],
    score:2
  },
  {
    answers: ['c', 'a', 'd', 'c'],
    score:2
  },
  {
    answers: ['c', 'a', 'd', 'a'],
    score: 2
  }
]