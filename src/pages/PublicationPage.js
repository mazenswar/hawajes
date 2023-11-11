import React, { Suspense, useEffect } from 'react';
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

  useEffect(() => {
    if (isMobile) {
      window.location.replace(file);
    }
  }, [file]);

  return (
    <main>
      <h1 className="page-title">{nameAR[name]}</h1>

      {isMobile ? null : (
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
            {(f) => (
              <object
                data={f}
                type="application/pdf"
                className="pdf-viewer"
                width={'80%'}
                height={'400px'}
              >
                <p>حدث خطأ أثناء تحميل الملف، نرجوا المحاولة مجددًا بعد قليل</p>
              </object>
            )}
          </Await>
        </Suspense>
      )}
    </main>
  );
}
