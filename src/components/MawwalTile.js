import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MawwalTile({ data }) {
  const [file, setFile] = useState('');

  async function getFile() {
    let key = data.fullPath.replace('/', '');
    key = key.replaceAll("'", '-');
    const awsFile = await Storage.get(key);
    setFile(awsFile);
  }

  useEffect(() => {
    getFile();
  }, [data]);
  return (
    <Link to={data.id} target="_blank" rel="noreferer" className="mawwal-tile">
      <img src={file} alt="mawwal" />
    </Link>
  );
}

export default MawwalTile;
