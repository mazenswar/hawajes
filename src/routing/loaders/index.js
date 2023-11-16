import { Storage, Predicates } from 'aws-amplify';
import { Article, Mawwal, Photo } from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import { defer } from 'react-router-dom';

// interviews

async function interviewsLoader() {
  const interviews = [
    {
      file: 'https://www.youtube.com/embed/mkMBu_hLKK8?si=orxjC0puDWA2QTgr',
      title: 'التاريخ الشفهي',
    },
    {
      file: 'https://www.youtube.com/embed/H77ZQLzjU-A?si=nG913kVUoYCTn4N9',
      title: 'ندوة الإبحار مع عقيل سوار - برنامج ملفات عربية',
    },
    {
      file: 'https://www.youtube.com/embed/geOOpkqA_Lc?si=g066nlE1mJymChJ4',
      title: 'لقاء الجمعة مع إبراهيم بشمي (١٩٩٦)',
    },
    {
      file: 'https://www.youtube.com/embed/1ANYos6abQY?si=TybHJQYUuB2MGFCB',
      title: 'جمعية الصحفيين مع إيمان مرهون',
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

async function articlePageLoader({ params }) {
  const { publisher, category, id } = params;
  const articles = await DataStore.query(
    Article,
    (c) =>
      c.and((c) => [c.publisherEN.eq(publisher), c.categoryEN.eq(category)]),
    {
      sort: (s) => s.date('ASCENDING'),
    }
  );

  const article = articles.find((a) => a.id === id);
  const articleIndex = articles.indexOf(article);
  const filepath = article.fullPath.slice(1);
  const key = filepath.replace(' ', '-');
  const file = Storage.get(key);
  const lastArticleId = articles.length;
  const firstArticleId = 1;
  const articleRange = [firstArticleId, lastArticleId];

  const prevArticleId = articles[articleIndex - 1]
    ? articles[articleIndex - 1].id
    : null;
  const nextArticleId = articles[articleIndex + 1]
    ? articles[articleIndex + 1].id
    : null;
  return defer({
    article,
    articleRange,
    nextArticleId,
    prevArticleId,
    articleIndex,
    file,
  });
}

////////////////////////////////////// THEATRE      ///////////////////////
const plays = [
  {
    nameEN: 'afa',
    nameAR: 'أفا يا عبيد',
    year: '١٩٨٩',
    cover: false,
    doc: true,
    video: 'https://www.youtube.com/embed/psk_N7kLj9g?si=ndvRZSiir3BiqSXJ',
    images: true,
    songs: false,
  },
  {
    nameEN: 'rajol',
    nameAR: 'رجل من عامة الناس',
    year: '١٩٨٤',
    cover: false,
    doc: true,
    video: 'https://www.youtube.com/embed/WzusIwUV7C4?si=Mcp2K93EBxrL6HcF',
    images: true,
    songs: false,
  },
  {
    nameEN: 'baraha',
    nameAR: 'البراحة',
    year: '١٩٨٠',
    cover: true,
    doc: true,
    video: 'https://www.youtube.com/embed/9Ae3t-iWc68?si=oGIKkrvAx8b55TSK',
    images: true,
    songs: false,
  },
  {
    nameEN: 'bint',
    nameAR: 'بنت النوخذة',
    year: '١٩٨٦',
    cover: true,
    doc: true,
    video: 'https://www.youtube.com/embed/yNkFRIKNzQU?si=iRfakGgjWfnwTu98',
    images: true,
    songs: true,
  },
  {
    nameEN: 'juwaira',
    nameAR: 'جويرة',
    year: '١٩٩٧',
    cover: false,
    doc: true,
    video: 'https://www.youtube.com/embed/5g2knCh9ZrM?si=KAAfUnDDqcyZdMKX',
    images: false,
    songs: false,
  },
  {
    nameEN: 'khamees',
    nameAR: 'خميس وجمعة',
    year: '١٩٨٩',
    cover: false,
    doc: true,
    video: 'https://www.youtube.com/embed/f44hjcUwF_U?si=KTCJbXlIffbx5Zbh',
    images: false,
    songs: false,
  },
  {
    nameEN: 'rab',
    nameAR: 'ربع المكدة',
    year: '٢٠١٠',
    cover: false,
    doc: true,
    video: 'https://www.youtube.com/embed/MBG_3uQ-uCw?si=71S3FKDoaqEpDcYM',
    images: false,
    songs: false,
  },
  {
    nameEN: 'tafateef',
    nameAR: 'الطفاطيف',
    year: '٢٠١٦',
    cover: false,
    doc: false,
    video: '',
    images: true,
    songs: true,
  },
  {
    nameEN: 'gilgamesh',
    nameAR: 'شجرة الحياة',
    year: '١٩٩٠',
    cover: false,
    doc: true,
    video: '',
    images: false,
    songs: false,
  },
  {
    nameEN: 'soug',
    nameAR: 'سوق المقاصيص',
    year: '١٩٩١',
    cover: false,
    doc: true,
    video: 'https://www.youtube.com/embed/s7zgkmQq2dg?si=k7k2CzoLYeS2C1MZ',
    images: true,
    songs: false,
  },
];

async function playLoader({ params }) {
  const play = plays.find((p) => p.nameEN === params.key);
  const data = {
    cover: false,
    doc: false,
    video: play.video,
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

  return { plays };
}

async function alayamLoader({ params }) {
  let articles = [];

  try {
    articles = await DataStore.query(
      Article,
      (c) => c.publisherEN.eq('alayam'),
      {
        sort: (s) => s.date('ASCENDING'),
      }
    );
  } catch (error) {
    console.log('Error retrieving data ', error);
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

  try {
    articles = await DataStore.query(Article, (c) => c.publisherEN.eq('aak'), {
      sort: (s) => s.date('ASCENDING'),
    });
  } catch (error) {
    console.log('Error retrieving data ', error);
  }

  articles.forEach((a) => {
    articlesByCategory[a.categoryEN].push(a);
  });

  return {
    category: params.category || '',
    articlesByCategory,
    allArticles: articles,
  };
}

async function publicationLoader({ params }) {
  // return publications.find((p) => p.id === params.id);
  const response = Storage.get('publications/' + params.name + '.pdf');
  return defer({ name: params.name, file: response });
}

async function photographyCategoryLoader({ params }) {
  let photos = [];
  try {
    photos = await DataStore.query(Photo, (p) =>
      p.category.eq(params.category)
    );
  } catch (error) {
    console.log('Error retrieving data ', error);
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
  const file = Storage.get(photo.fullPath);
  const lastPhotoId = photos.length;
  const firstPhotoId = 1;
  const photoRange = [firstPhotoId, lastPhotoId];

  const prevPhotoId = photos[photoIndex - 1] ? photos[photoIndex - 1].id : null;
  const nextPhotoId = photos[photoIndex + 1] ? photos[photoIndex + 1].id : null;
  return defer({
    photo,
    photoRange,
    nextPhotoId,
    prevPhotoId,
    photoIndex,
    file,
    id,
  });
}

async function alwatanLoader() {
  let articles = [];
  try {
    articles = await DataStore.query(
      Article,
      (c) => c.publisherEN.eq('alwatan'),
      {
        sort: (s) => s.date('ASCENDING'),
      }
    );
  } catch (error) {
    console.log('Error retrieving data ', error);
  }

  return articles;
}

async function sadaLoader() {
  let articles = [];
  try {
    articles = await DataStore.query(Article, (c) => c.publisherEN.eq('sada'), {
      sort: (s) => s.date('ASCENDING'),
    });
  } catch (error) {
    console.log('Error retrieving data ', error);
  }

  return articles;
}

async function panoramaLoader() {
  let articles = [];
  try {
    articles = await DataStore.query(
      Article,
      (c) => c.publisherEN.eq('panorama'),
      {
        sort: (s) => s.date('ASCENDING'),
      }
    );
  } catch (error) {
    console.log('Error retrieving data ', error);
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

  return {
    articles: await loader(params),
    publisher: params.publisher,
  };
}

// MAWWAL

async function mawwalLoader({ params }) {
  let mawwals = [];
  try {
    mawwals = await DataStore.query(Mawwal, (p) =>
      p.category.eq(params.category)
    );
  } catch (error) {
    console.log('Error retrieving data ', error);
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
  playsLoader,
  publicationLoader,

  photographyCategoryLoader,
  alayamLoader,
  publisherPageLoader,
  mawwalLoader,
  photoLoader,
  mawwalShowLoader,
  interviewsLoader,
};

export default loaders;
