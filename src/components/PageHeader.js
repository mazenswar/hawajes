import React, { useEffect, useState } from 'react';
import useScreenDimensions from './hooks/useScreenDimensions';
//// landing
// import landingBg from '../assets/images/headers'
// import landingSm from '../assets/images/headers'
//// photography
// import landingSm from '../assets/images/headers'
// import landingSm from '../assets/images/headers'
//// mawwal
// import landingSm from '../assets/images/headers'
// import landingSm from '../assets/images/headers'
//// journalism
// import landingSm from '../assets/images/headers'
// import landingSm from '../assets/images/headers'
//// publications
// import landingSm from '../assets/images/headers'
// import landingSm from '../assets/images/headers'
//// theatre
// import landingSm from '../assets/images/headers'
// import landingSm from '../assets/images/headers'

function PageHeader({ page }) {
  const { dimensions } = useScreenDimensions();

  const [headers, setHeaders] = useState({
    bg: '',
    sm: '',
  });

  function configureHeaders(pageName) {
    switch (pageName) {
      case 'landing':
        break;
      case 'photography':
        break;
      case 'mawwal':
        break;
      case 'journalism':
        break;
      case 'publications':
        break;
      case 'theatre':
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
