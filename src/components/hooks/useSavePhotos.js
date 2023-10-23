import { DataStore, Predicates, Storage } from 'aws-amplify';
import { Photo } from '../../models';

const photos = [
  { filename: 'photo1.jpg', fullPath: 'photography/photo1.jpg' },
  { filename: 'photo10.jpg', fullPath: 'photography/photo10.jpg' },
  { filename: 'photo100.jpg', fullPath: 'photography/photo100.jpg' },
  { filename: 'photo101.jpg', fullPath: 'photography/photo101.jpg' },
  { filename: 'photo102.jpg', fullPath: 'photography/photo102.jpg' },
  { filename: 'photo103.jpg', fullPath: 'photography/photo103.jpg' },
  { filename: 'photo104.jpg', fullPath: 'photography/photo104.jpg' },
  { filename: 'photo105.jpg', fullPath: 'photography/photo105.jpg' },
  { filename: 'photo106.jpg', fullPath: 'photography/photo106.jpg' },
  { filename: 'photo107.jpg', fullPath: 'photography/photo107.jpg' },
  { filename: 'photo108.jpg', fullPath: 'photography/photo108.jpg' },
  { filename: 'photo109.jpg', fullPath: 'photography/photo109.jpg' },
  { filename: 'photo11.jpg', fullPath: 'photography/photo11.jpg' },
  { filename: 'photo110.jpg', fullPath: 'photography/photo110.jpg' },
  { filename: 'photo111.jpg', fullPath: 'photography/photo111.jpg' },
  { filename: 'photo112.jpg', fullPath: 'photography/photo112.jpg' },
  { filename: 'photo113.jpg', fullPath: 'photography/photo113.jpg' },
  { filename: 'photo114.jpg', fullPath: 'photography/photo114.jpg' },
  { filename: 'photo115.jpg', fullPath: 'photography/photo115.jpg' },
  { filename: 'photo116.jpg', fullPath: 'photography/photo116.jpg' },
  { filename: 'photo117.jpg', fullPath: 'photography/photo117.jpg' },
  { filename: 'photo118.jpg', fullPath: 'photography/photo118.jpg' },
  { filename: 'photo119.jpg', fullPath: 'photography/photo119.jpg' },
  { filename: 'photo12.jpg', fullPath: 'photography/photo12.jpg' },
  { filename: 'photo120.jpg', fullPath: 'photography/photo120.jpg' },
  { filename: 'photo121.jpg', fullPath: 'photography/photo121.jpg' },
  { filename: 'photo122.jpg', fullPath: 'photography/photo122.jpg' },
  { filename: 'photo123.jpg', fullPath: 'photography/photo123.jpg' },
  { filename: 'photo124.jpg', fullPath: 'photography/photo124.jpg' },
  { filename: 'photo125.jpg', fullPath: 'photography/photo125.jpg' },
  { filename: 'photo126.jpg', fullPath: 'photography/photo126.jpg' },
  { filename: 'photo127.jpg', fullPath: 'photography/photo127.jpg' },
  { filename: 'photo128.jpg', fullPath: 'photography/photo128.jpg' },
  { filename: 'photo129.jpg', fullPath: 'photography/photo129.jpg' },
  { filename: 'photo13.jpg', fullPath: 'photography/photo13.jpg' },
  { filename: 'photo130.jpg', fullPath: 'photography/photo130.jpg' },
  { filename: 'photo131.jpg', fullPath: 'photography/photo131.jpg' },
  { filename: 'photo132.jpg', fullPath: 'photography/photo132.jpg' },
  { filename: 'photo133.jpg', fullPath: 'photography/photo133.jpg' },
  { filename: 'photo134.jpg', fullPath: 'photography/photo134.jpg' },
  { filename: 'photo135.jpg', fullPath: 'photography/photo135.jpg' },
  { filename: 'photo136.jpg', fullPath: 'photography/photo136.jpg' },
  { filename: 'photo137.jpg', fullPath: 'photography/photo137.jpg' },
  { filename: 'photo138.jpg', fullPath: 'photography/photo138.jpg' },
  { filename: 'photo139.jpg', fullPath: 'photography/photo139.jpg' },
  { filename: 'photo14.jpg', fullPath: 'photography/photo14.jpg' },
  { filename: 'photo140.jpg', fullPath: 'photography/photo140.jpg' },
  { filename: 'photo141.jpg', fullPath: 'photography/photo141.jpg' },
  { filename: 'photo142.jpg', fullPath: 'photography/photo142.jpg' },
  { filename: 'photo143.jpg', fullPath: 'photography/photo143.jpg' },
  { filename: 'photo144.jpg', fullPath: 'photography/photo144.jpg' },
  { filename: 'photo145.jpg', fullPath: 'photography/photo145.jpg' },
  { filename: 'photo146.jpg', fullPath: 'photography/photo146.jpg' },
  { filename: 'photo147.jpg', fullPath: 'photography/photo147.jpg' },
  { filename: 'photo148.jpg', fullPath: 'photography/photo148.jpg' },
  { filename: 'photo149.jpg', fullPath: 'photography/photo149.jpg' },
  { filename: 'photo15.jpg', fullPath: 'photography/photo15.jpg' },
  { filename: 'photo150.jpg', fullPath: 'photography/photo150.jpg' },
  { filename: 'photo151.jpg', fullPath: 'photography/photo151.jpg' },
  { filename: 'photo152.jpg', fullPath: 'photography/photo152.jpg' },
  { filename: 'photo153.jpg', fullPath: 'photography/photo153.jpg' },
  { filename: 'photo154.jpg', fullPath: 'photography/photo154.jpg' },
  { filename: 'photo155.jpg', fullPath: 'photography/photo155.jpg' },
  { filename: 'photo156.jpg', fullPath: 'photography/photo156.jpg' },
  { filename: 'photo157.jpg', fullPath: 'photography/photo157.jpg' },
  { filename: 'photo158.jpg', fullPath: 'photography/photo158.jpg' },
  { filename: 'photo159.jpg', fullPath: 'photography/photo159.jpg' },
  { filename: 'photo16.jpg', fullPath: 'photography/photo16.jpg' },
  { filename: 'photo160.jpg', fullPath: 'photography/photo160.jpg' },
  { filename: 'photo161.jpg', fullPath: 'photography/photo161.jpg' },
  { filename: 'photo162.jpg', fullPath: 'photography/photo162.jpg' },
  { filename: 'photo163.jpg', fullPath: 'photography/photo163.jpg' },
  { filename: 'photo164.jpg', fullPath: 'photography/photo164.jpg' },
  { filename: 'photo165.jpg', fullPath: 'photography/photo165.jpg' },
  { filename: 'photo166.png', fullPath: 'photography/photo166.png' },
  { filename: 'photo167.png', fullPath: 'photography/photo167.png' },
  { filename: 'photo168.png', fullPath: 'photography/photo168.png' },
  { filename: 'photo169.png', fullPath: 'photography/photo169.png' },
  { filename: 'photo17.jpg', fullPath: 'photography/photo17.jpg' },
  { filename: 'photo170.png', fullPath: 'photography/photo170.png' },
  { filename: 'photo171.png', fullPath: 'photography/photo171.png' },
  { filename: 'photo172.png', fullPath: 'photography/photo172.png' },
  { filename: 'photo173.png', fullPath: 'photography/photo173.png' },
  { filename: 'photo174.png', fullPath: 'photography/photo174.png' },
  { filename: 'photo175.png', fullPath: 'photography/photo175.png' },
  { filename: 'photo176.png', fullPath: 'photography/photo176.png' },
  { filename: 'photo177.png', fullPath: 'photography/photo177.png' },
  { filename: 'photo178.png', fullPath: 'photography/photo178.png' },
  { filename: 'photo179.png', fullPath: 'photography/photo179.png' },
  { filename: 'photo18.jpg', fullPath: 'photography/photo18.jpg' },
  { filename: 'photo180.png', fullPath: 'photography/photo180.png' },
  { filename: 'photo19.jpg', fullPath: 'photography/photo19.jpg' },
  { filename: 'photo2.jpg', fullPath: 'photography/photo2.jpg' },
  { filename: 'photo20.jpg', fullPath: 'photography/photo20.jpg' },
  { filename: 'photo21.jpg', fullPath: 'photography/photo21.jpg' },
  { filename: 'photo22.jpg', fullPath: 'photography/photo22.jpg' },
  { filename: 'photo23.jpg', fullPath: 'photography/photo23.jpg' },
  { filename: 'photo24.jpg', fullPath: 'photography/photo24.jpg' },
  { filename: 'photo25.jpg', fullPath: 'photography/photo25.jpg' },
  { filename: 'photo26.jpg', fullPath: 'photography/photo26.jpg' },
  { filename: 'photo27.jpg', fullPath: 'photography/photo27.jpg' },
  { filename: 'photo28.jpg', fullPath: 'photography/photo28.jpg' },
  { filename: 'photo29.jpg', fullPath: 'photography/photo29.jpg' },
  { filename: 'photo3.jpg', fullPath: 'photography/photo3.jpg' },
  { filename: 'photo30.jpg', fullPath: 'photography/photo30.jpg' },
  { filename: 'photo31.jpg', fullPath: 'photography/photo31.jpg' },
  { filename: 'photo32.jpg', fullPath: 'photography/photo32.jpg' },
  { filename: 'photo33.jpg', fullPath: 'photography/photo33.jpg' },
  { filename: 'photo34.jpg', fullPath: 'photography/photo34.jpg' },
  { filename: 'photo36.jpg', fullPath: 'photography/photo36.jpg' },
  { filename: 'photo37.jpg', fullPath: 'photography/photo37.jpg' },
  { filename: 'photo38.jpg', fullPath: 'photography/photo38.jpg' },
  { filename: 'photo39.jpg', fullPath: 'photography/photo39.jpg' },
  { filename: 'photo4.jpg', fullPath: 'photography/photo4.jpg' },
  { filename: 'photo40.jpg', fullPath: 'photography/photo40.jpg' },
  { filename: 'photo41.jpg', fullPath: 'photography/photo41.jpg' },
  { filename: 'photo42.jpg', fullPath: 'photography/photo42.jpg' },
  { filename: 'photo43.jpg', fullPath: 'photography/photo43.jpg' },
  { filename: 'photo44.jpg', fullPath: 'photography/photo44.jpg' },
  { filename: 'photo45.jpg', fullPath: 'photography/photo45.jpg' },
  { filename: 'photo46.jpg', fullPath: 'photography/photo46.jpg' },
  { filename: 'photo47.jpg', fullPath: 'photography/photo47.jpg' },
  { filename: 'photo48.jpg', fullPath: 'photography/photo48.jpg' },
  { filename: 'photo49.jpg', fullPath: 'photography/photo49.jpg' },
  { filename: 'photo5.jpg', fullPath: 'photography/photo5.jpg' },
  { filename: 'photo50.jpg', fullPath: 'photography/photo50.jpg' },
  { filename: 'photo51.jpg', fullPath: 'photography/photo51.jpg' },
  { filename: 'photo52.jpg', fullPath: 'photography/photo52.jpg' },
  { filename: 'photo53.jpg', fullPath: 'photography/photo53.jpg' },
  { filename: 'photo54.jpg', fullPath: 'photography/photo54.jpg' },
  { filename: 'photo55.jpg', fullPath: 'photography/photo55.jpg' },
  { filename: 'photo56.jpg', fullPath: 'photography/photo56.jpg' },
  { filename: 'photo57.jpg', fullPath: 'photography/photo57.jpg' },
  { filename: 'photo58.jpg', fullPath: 'photography/photo58.jpg' },
  { filename: 'photo59.jpg', fullPath: 'photography/photo59.jpg' },
  { filename: 'photo6.jpg', fullPath: 'photography/photo6.jpg' },
  { filename: 'photo60.jpg', fullPath: 'photography/photo60.jpg' },
  { filename: 'photo61.jpg', fullPath: 'photography/photo61.jpg' },
  { filename: 'photo62.jpg', fullPath: 'photography/photo62.jpg' },
  { filename: 'photo63.jpg', fullPath: 'photography/photo63.jpg' },
  { filename: 'photo64.jpg', fullPath: 'photography/photo64.jpg' },
  { filename: 'photo65.jpg', fullPath: 'photography/photo65.jpg' },
  { filename: 'photo66.jpg', fullPath: 'photography/photo66.jpg' },
  { filename: 'photo67.jpg', fullPath: 'photography/photo67.jpg' },
  { filename: 'photo68.jpg', fullPath: 'photography/photo68.jpg' },
  { filename: 'photo69.jpg', fullPath: 'photography/photo69.jpg' },
  { filename: 'photo7.jpg', fullPath: 'photography/photo7.jpg' },
  { filename: 'photo70.jpg', fullPath: 'photography/photo70.jpg' },
  { filename: 'photo71.jpg', fullPath: 'photography/photo71.jpg' },
  { filename: 'photo72.jpg', fullPath: 'photography/photo72.jpg' },
  { filename: 'photo73.jpg', fullPath: 'photography/photo73.jpg' },
  { filename: 'photo74.jpg', fullPath: 'photography/photo74.jpg' },
  { filename: 'photo75.jpg', fullPath: 'photography/photo75.jpg' },
  { filename: 'photo76.jpg', fullPath: 'photography/photo76.jpg' },
  { filename: 'photo77.jpg', fullPath: 'photography/photo77.jpg' },
  { filename: 'photo78.jpg', fullPath: 'photography/photo78.jpg' },
  { filename: 'photo79.jpg', fullPath: 'photography/photo79.jpg' },
  { filename: 'photo8.jpg', fullPath: 'photography/photo8.jpg' },
  { filename: 'photo80.jpg', fullPath: 'photography/photo80.jpg' },
  { filename: 'photo81.jpg', fullPath: 'photography/photo81.jpg' },
  { filename: 'photo82.jpg', fullPath: 'photography/photo82.jpg' },
  { filename: 'photo83.jpg', fullPath: 'photography/photo83.jpg' },
  { filename: 'photo84.jpg', fullPath: 'photography/photo84.jpg' },
  { filename: 'photo85.jpg', fullPath: 'photography/photo85.jpg' },
  { filename: 'photo86.jpg', fullPath: 'photography/photo86.jpg' },
  { filename: 'photo87.jpg', fullPath: 'photography/photo87.jpg' },
  { filename: 'photo88.jpg', fullPath: 'photography/photo88.jpg' },
  { filename: 'photo89.jpg', fullPath: 'photography/photo89.jpg' },
  { filename: 'photo9.jpg', fullPath: 'photography/photo9.jpg' },
  { filename: 'photo90.jpg', fullPath: 'photography/photo90.jpg' },
  { filename: 'photo91.jpg', fullPath: 'photography/photo91.jpg' },
  { filename: 'photo92.jpg', fullPath: 'photography/photo92.jpg' },
  { filename: 'photo93.jpg', fullPath: 'photography/photo93.jpg' },
  { filename: 'photo94.jpg', fullPath: 'photography/photo94.jpg' },
  { filename: 'photo95.jpg', fullPath: 'photography/photo95.jpg' },
  { filename: 'photo96.jpg', fullPath: 'photography/photo96.jpg' },
  { filename: 'photo97.jpg', fullPath: 'photography/photo97.jpg' },
  { filename: 'photo98.jpg', fullPath: 'photography/photo98.jpg' },
  { filename: 'photo99.jpg', fullPath: 'photography/photo99.jpg' },
];

export default function useSavePhotos() {
  function savePhotos() {
    photos.forEach(async (a) => {
      try {
        const photo = await DataStore.save(new Photo(a));
        console.log('photo saved successfully!');
      } catch (error) {
        console.log('Error saving photo', error);
        console.log('Error article', a);
      }
    });
  }

  async function deletePhotos() {
    try {
      await DataStore.delete(Photo, Predicates.ALL);
      console.log('deleted successfully');
    } catch (error) {
      console.log('ERROR ===> ', error);
    }
  }

  async function updatePhoto(original) {
    const newFullPath = await Storage.get('photography/' + original.fullPath);
    const updatedPhoto = await DataStore.save(
      Photo.copyOf(original, (updated) => {
        updated.fullPath = newFullPath;
      })
    );
  }
  async function updatePhotos() {
    const photos = await DataStore.query(Photo);
    photos.forEach((p) => {
      updatePhoto(p);
    });
  }
  return { savePhotos, updatePhotos, deletePhotos };
}
