import React from 'react';
import PaginatedPhotos from '../components/PaginatedPhotos';
import { useLoaderData } from 'react-router-dom';

const categories = {
  personal: 'صور شخصية',
  art: 'لقطات فنية',
  event: 'حفل تدشين الموقع',
};

function PhotographyCategoryPage() {
  const { category, list } = useLoaderData();

  return (
    <main className="photo-section">
      <h1 className="page-title">{categories[category]}</h1>
      <PaginatedPhotos data={list} itemsPerPage={6} />
    </main>
  );
}

export default PhotographyCategoryPage;
