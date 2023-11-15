import React, { Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { Await, useLoaderData } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';

export default function PublicationPage() {
  const { file, name } = useLoaderData();
  const nameAR = {
    holako: 'هولاكو والأسرى الأربعة',
    rainbow: 'حكاية قوس قزح',
    mawalat: 'موالات بحرينية',
    makaka: 'مكاكة عشق',
  };

  function renderPublication(resolvedFile) {
    if (isMobile) {
      Promise.resolve(file).then((url) => {
        window.location.replace(url);
      });
    } else {
      return (
        <object
          data={resolvedFile + '#view=FitB'}
          type="application/pdf"
          className="pdf-viewer"
          width={'80%'}
          height={'400px'}
        >
          <p>حدث خطأ أثناء تحميل الملف، نرجوا المحاولة مجددًا بعد قليل</p>
        </object>
      );
    }
  }

  return (
    <main>
      <h1 className="page-title">{nameAR[name]}</h1>

      <Suspense
        fallback={
          <main className="flex-list-y">
            <ThreeCircles
              height="100"
              width="100"
              color="#565656"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </main>
        }
      >
        <Await resolve={file} errorElement={'Error loading Article'}>
          {renderPublication}
        </Await>
      </Suspense>
    </main>
  );
}
