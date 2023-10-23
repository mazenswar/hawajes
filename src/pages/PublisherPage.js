import React, { useEffect } from 'react';
import AakPage from './AakPage';
import AlayamPage from './AlayamPage';
import { useLoaderData } from 'react-router';
import AlwatanPage from './AlwatanPage';
import SadaPage from './SadaPage';
import PanoramaPage from './PanoramaPage';

function PublisherPage() {
  const { publisher } = useLoaderData();
  const components = {
    aak: <AakPage />,
    alayam: <AlayamPage />,
    alwatan: <AlwatanPage />,
    sada: <SadaPage />,
    panorama: <PanoramaPage />,
  };
  useEffect(() => {}, [publisher]);

  return components[publisher];
}

export default PublisherPage;
