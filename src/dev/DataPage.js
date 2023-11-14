import React, { useEffect, useState } from 'react';
import useSaveArticles from './useSaveArticles';

function DataPage() {
  const { saveArticles, sadaCount, deleteSada } = useSaveArticles();

  function handleClick(e) {
    saveArticles();
  }

  return (
    <div>
      DataPage
      <button onClick={deleteSada}>Delete Sada</button>
      <button onClick={handleClick}>Save articles</button>
      <button onClick={sadaCount}>Sada count</button>
    </div>
  );
}

export default DataPage;
