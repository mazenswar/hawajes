import React, { useEffect, useState } from 'react';
import useScreenDimensions from './hooks/useScreenDimensions';
//// landing
import landingBg from '../assets/images/headers/landingBg.png';
import landingSm from '../assets/images/headers/landingSm.png';
//// photography
import photographySm from '../assets/images/headers/photographySm.png';
import photographyBg from '../assets/images/headers/photographyBg.png';
//// mawwal
import mawwalSm from '../assets/images/headers/mawwalSm.png';
import mawwalBg from '../assets/images/headers/mawwalBg.png';
//// journalism
import journalismSm from '../assets/images/headers/journalismSm.png';
import journalismBg from '../assets/images/headers/journalismBg.png';
//// publications
import publicationsSm from '../assets/images/headers/publicationsSm.png';
import publicationsBg from '../assets/images/headers/publicationsBg.png';
//// theatre
import theatreSm from '../assets/images/headers/theatreSm.png';
import theatreBg from '../assets/images/headers/theatreBg.png';

function PageHeader({ page }) {
  const { dimensions } = useScreenDimensions();

  const [headers, setHeaders] = useState({
    bg: '',
    sm: '',
  });

  function configureHeaders(pageName) {
    switch (pageName) {
      case 'landing':
        setHeaders({
          bg: landingBg,
          sm: landingSm,
        });
        break;
      case 'photography':
        setHeaders({
          bg: photographyBg,
          sm: photographySm,
        });
        break;
      case 'mawwal':
        setHeaders({
          bg: mawwalBg,
          sm: mawwalSm,
        });
        break;
      case 'journalism':
        setHeaders({
          bg: journalismBg,
          sm: journalismSm,
        });
        break;
      case 'publications':
        setHeaders({
          bg: publicationsBg,
          sm: publicationsSm,
        });
        break;
      case 'theatre':
        setHeaders({
          bg: theatreBg,
          sm: theatreSm,
        });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    configureHeaders(page);
  }, [page]);

  return (
    <section className="page-header">
      <img
        src={dimensions.width < 500 ? headers.sm : headers.bg}
        alt="header"
      />
    </section>
  );
}

export default PageHeader;
