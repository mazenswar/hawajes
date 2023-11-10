import { Storage } from 'aws-amplify';
import { Article, Mawwal, Photo } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

// interviews

async function interviewsLoader() {
  const file = await Storage.get('interviews/Aqeel-Oral-History.mp4');
  const interviews = [
    {
      file,
      title: 'الذاكرة الشفهية',
    },
  ];

  return interviews;
}

// HELPERS

// distinguish between files and folders
function processStorageList(response) {
  let files = [];
  let folders = new Set();
  response.results.forEach((res) => {
    if (res.size) {
      files.push(res);
      // sometimes files declare a folder with a / within then
      let possibleFolder = res.key.split('/').slice(0, -1).join('/');
      if (possibleFolder) folders.add(possibleFolder);
    } else {
      folders.add(res.key);
    }
  });
  return { files, folders };
}

/////////////////////////////// TEST

//////////////////////////////// LOADERS
// function getHeader(page) {
//   const headerBg = Storage.get('headers');
//   const headerSm = Storage.get('logos/facebook.png');

//   Promise.all([headerBg, headerSm]).then((results) => {
//     return results;
//   });
// }

async function landingPageLoader({ params }) {
  const headerBg = await Storage.get('headers/landing-header-bg.png');
  const headerSm = await Storage.get('headers/landing-header-sm.png');
  return { headerBg, headerSm };
}

async function journalismPageLoader({ params }) {
  const headshot = await Storage.get('headshots/journalism.jpg');
  const header = await Storage.get('headers/journalism-header.png');
  return { headshot, header };
}

async function articlePageLoader({ params }) {
  const { publisher, category, id } = params;
  const articles = await DataStore.query(Article, (c) =>
    c.and((c) => [c.publisherEN.eq(publisher), c.categoryEN.eq(category)])
  );
  const article = articles.find((a) => a.id === id);
  const articleIndex = articles.indexOf(article);
  const filepath = article.fullPath.slice(1);
  const key = filepath.replace(' ', '-');
  const file = await Storage.get(key);
  const lastArticleId = articles.length;
  const firstArticleId = 1;
  const articleRange = [firstArticleId, lastArticleId];

  const prevArticleId = articles[articleIndex - 1]
    ? articles[articleIndex - 1].id
    : null;
  const nextArticleId = articles[articleIndex + 1]
    ? articles[articleIndex + 1].id
    : null;
  return {
    article,
    articleRange,
    nextArticleId,
    prevArticleId,
    articleIndex,
    file,
  };
}

////////////////////////////////////// THEATRE      ///////////////////////
const plays = [
  {
    nameEN: 'afa',
    nameAR: 'أفا يا عبيد',
    year: 1989,
    cover: false,
    doc: false,
    video: true,
    images: true,
    songs: false,
  },
  {
    nameEN: 'rajol',
    nameAR: 'رجل من عامة الناس',
    year: 1984,
    cover: false,
    doc: true,
    video: false,
    images: true,
    songs: false,
  },
  {
    nameEN: 'baraha',
    nameAR: 'البراحة',
    year: 1980,
    cover: true,
    doc: true,
    video: true,
    images: true,
    songs: false,
  },
  {
    nameEN: 'bint',
    nameAR: 'بنت النوخذة',
    year: 1986,
    cover: true,
    doc: true,
    video: true,
    images: true,
    songs: true,
  },
  {
    nameEN: 'juwaira',
    nameAR: 'جويرة',
    year: 1997,
    cover: false,
    doc: false,
    video: true,
    images: false,
    songs: false,
  },
  {
    nameEN: 'khamees',
    nameAR: 'خميس وجمعة',
    year: 1989,
    cover: true,
    doc: false,
    video: true,
    images: false,
    songs: false,
  },
  {
    nameEN: 'rab',
    nameAR: 'ربع المكدة',
    year: 2010,
    cover: true,
    doc: true,
    video: true,
    images: false,
    songs: false,
  },
  {
    nameEN: 'tafateef',
    nameAR: 'الطفاطيف',
    year: 2016,
    cover: false,
    doc: false,
    video: false,
    images: true,
    songs: true,
  },
  {
    nameEN: 'gilgamesh',
    nameAR: 'شجرة الحياة',
    year: 1900,
    cover: false,
    doc: true,
    video: false,
    images: false,
    songs: false,
  },
  {
    nameEN: 'soug',
    nameAR: 'سوق المقاصيص',
    year: 1991,
    cover: false,
    doc: true,
    video: true,
    images: false,
    songs: false,
  },
];

async function playLoader({ params }) {
  const play = plays.find((p) => p.nameEN === params.key);
  const data = {
    cover: false,
    doc: false,
    video: false,
    images: false,
    songs: false,
    year: play.year,
  };

  if (play.cover) {
    data['cover'] = await Storage.get(
      'plays/' + params.key + '/cover-image.jpg'
    );
  }
  if (play.doc) {
    data['doc'] = await Storage.get('plays/' + params.key + '/doc.pdf');
  }
  if (play.video) {
    data['video'] = await Storage.get('plays/' + params.key + '/video.mp4');
  }
  if (play.images) {
    const awsList = await Storage.list('plays/' + params.key + '/images');
    const { files } = processStorageList(awsList);
    const list = [];
    files.forEach(async (f) => {
      const file = await Storage.get(f.key);
      list.push(file);
    });
    data['images'] = list;
  }
  if (play.songs) {
    const awsList = await Storage.list('plays/' + params.key + '/songs');
    const { files } = processStorageList(awsList);
    const list = [];
    files.forEach(async (f) => {
      const file = await Storage.get(f.key);
      list.push(file);
    });
    data['songs'] = list;
  }

  return { ...data, play };
}

async function playsLoader({ params }) {
  // return testPlays;
  const headshot = await Storage.get('headshots/theatre.jpg');
  const header = await Storage.get('headers/theatre-header.png');
  return { headshot, header, plays };
}

async function alayamLoader({ params }) {
  let articles = [];

  try {
    articles = await DataStore.query(Article, (c) =>
      c.publisherEN.eq('alayam')
    );
    console.log(articles.length + ' articles retrieved successfully!');
  } catch (error) {
    console.log('Error retrieving posts', error);
  }

  return articles;
}

async function aakLoader({ params }) {
  const articlesByCategory = {
    hawajes: [],
    hawamesh: [],
    general: [],
    columns: [],
  };
  let articles = [];
  const header = await Storage.get('headers/journalism-header.png');
  console.log(header);

  try {
    articles = await DataStore.query(Article, (c) => c.publisherEN.eq('aak'));
    console.log(
      'aak articles retrieved successfully!',
      JSON.stringify(articles, null, 2)
    );
  } catch (error) {
    console.log('Error retrieving posts', error);
  }

  articles.forEach((a) => {
    articlesByCategory[a.categoryEN].push(a);
  });

  return {
    category: params.category || '',
    articlesByCategory,
    allArticles: articles,
    header,
  };
}

async function publicationsLoader({ params }) {
  const header = await Storage.get('headers/journalism-header.png');
  return { header };
}

async function publicationLoader({ params }) {
  // return publications.find((p) => p.id === params.id);
  const response = await Storage.get('publications/' + params.name + '.pdf');
  return { name: params.name, file: response };
}

async function photographyLoader({ params }) {
  // const { files } = processStorageList(await Storage.list('photography/'));
  // const list = [];
  // files.forEach(async (f) => {
  //   const file = await Storage.get(f.key);
  //   list.push({ ...f, file });
  // });
  const headerBg = await Storage.get('headers/photography-header-bg.jpg');
  const headerSm = await Storage.get('headers/photography-header-sm.jpg');
  return { headerBg, headerSm };
}

async function photographyCategoryLoader({ params }) {
  let photos = [];
  try {
    photos = await DataStore.query(Photo, (p) =>
      p.category.eq(params.category)
    );
    console.log('photos retrieved successfully!');
  } catch (error) {
    console.log('Error retrieving posts', error);
  }

  return {
    list: photos,
    category: params.category,
  };
}
async function photoLoader({ params }) {
  // const key = params.key;
  // const file = await Storage.get('photography/' + key + '.jpg');
  // return { file, key };

  const { id } = params;
  const photos = await DataStore.query(Photo);
  const photo = photos.find((a) => a.id === id);
  const photoIndex = photos.indexOf(photo);
  const file = await Storage.get(photo.fullPath);
  const lastPhotoId = photos.length;
  const firstPhotoId = 1;
  const photoRange = [firstPhotoId, lastPhotoId];

  const prevPhotoId = photos[photoIndex - 1] ? photos[photoIndex - 1].id : null;
  const nextPhotoId = photos[photoIndex + 1] ? photos[photoIndex + 1].id : null;
  return {
    photo,
    photoRange,
    nextPhotoId,
    prevPhotoId,
    photoIndex,
    file,
    id,
  };
}

async function alwatanLoader() {
  let articles = [];
  try {
    articles = await DataStore.query(Article, (c) =>
      c.publisherEN.eq('alwatan')
    );
    console.log(
      'articles retrieved successfully!',
      JSON.stringify(articles, null, 2)
    );
  } catch (error) {
    console.log('Error retrieving posts', error);
  }

  return articles;
}

async function sadaLoader() {
  let articles = [];
  try {
    articles = await DataStore.query(Article, (c) => c.publisherEN.eq('sada'));
    console.log(
      'articles retrieved successfully!',
      JSON.stringify(articles, null, 2)
    );
  } catch (error) {
    console.log('Error retrieving posts', error);
  }

  return articles;
}

async function panoramaLoader() {
  let articles = [];
  try {
    articles = await DataStore.query(Article, (c) =>
      c.publisherEN.eq('panorama')
    );
    console.log(
      'articles retrieved successfully!',
      JSON.stringify(articles, null, 2)
    );
  } catch (error) {
    console.log('Error retrieving posts', error);
  }

  return articles;
}

const publisherLoaders = {
  aak: aakLoader,
  alayam: alayamLoader,
  alwatan: alwatanLoader,
  sada: sadaLoader,
  panorama: panoramaLoader,
};
async function publisherPageLoader({ params }) {
  const loader = publisherLoaders[params.publisher];
  const header = await Storage.get('headers/journalism-header.png');

  return {
    articles: await loader(params),
    publisher: params.publisher,
    header,
  };
}

// MAWWAL
async function mawwalMainLoader({ params }) {
  const header = await Storage.get('headers/journalism-header.png');

  return { header };
}

async function getFile(key) {
  try {
    let path = key.replace('/', '');
    const file = await Storage.get(path);
    return file;
  } catch (error) {
    console.log('Error ====> ', error);
  }
}

async function mawwalLoader({ params }) {
  let mawwals = [];
  try {
    mawwals = await DataStore.query(Mawwal, (p) =>
      p.category.eq(params.category)
    );
  } catch (error) {
    console.log('Error retrieving posts', error);
  }

  return {
    list: mawwals,
    category: params.category,
  };
}

async function mawwalShowLoader({ params }) {
  const { id } = params;
  const mawwals = await DataStore.query(Mawwal);
  const mawwal = mawwals.find((a) => a.id === id);
  const mawwalIndex = mawwals.indexOf(mawwal);
  let key = mawwal.fullPath.replace('/', '');
  key = key.replaceAll("'", '-');
  const file = await Storage.get(key);
  const lastMawwalId = mawwals.length;
  const firstMawwalId = 1;
  const mawwalRange = [firstMawwalId, lastMawwalId];

  const prevMawwalId = mawwals[mawwalIndex - 1]
    ? mawwals[mawwalIndex - 1].id
    : null;
  const nextMawwalId = mawwals[mawwalIndex + 1]
    ? mawwals[mawwalIndex + 1].id
    : null;
  return {
    mawwal,
    mawwalRange,
    nextMawwalId,
    prevMawwalId,
    mawwalIndex,
    file,
    id,
  };
}

///////////////////////

async function getChildren(filePath) {
  const { results } = await Storage.list(filePath, { pageSize: 1000 });
  const files = results.filter((r) => r.size > 0);
  const children = [];
  files.forEach(async (f) => {
    const path = await Storage.get(f.key);
    children.push(path);
  });
  // debugger;
  return children;
}

// export
const loaders = {
  playLoader,
  articlePageLoader,
  aakLoader,
  journalismPageLoader,
  playsLoader,
  publicationsLoader,
  publicationLoader,
  photographyLoader,
  photographyCategoryLoader,
  alayamLoader,
  publisherPageLoader,
  mawwalLoader,
  photoLoader,
  landingPageLoader,
  mawwalMainLoader,
  mawwalShowLoader,
  interviewsLoader,
};

export default loaders;
