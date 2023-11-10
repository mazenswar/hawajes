import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PhotoTile({ data }) {
  const [file, setFile] = useState('');

  async function getFile() {
    const awsFile = await Storage.get(data.fullPath);
    setFile(awsFile);
  }

  useEffect(() => {
    getFile();
  }, [data]);

  return (
    <Link to={data.id} className="photo-tile">
      <img src={file} alt="scene" />
    </Link>
  );
}

export default PhotoTile;
