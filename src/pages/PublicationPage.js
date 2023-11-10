import React, { Suspense, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useLoaderData } from 'react-router-dom';

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
  }, [isMobile, file]);

  return (
    <main>
      <h1 className="page-title">{nameAR[name]}</h1>

      {isMobile ? null : (
        <Suspense
          fallback={
            <div>
              <h1>Loading...</h1>
            </div>
          }
        >
          <object
            data={file}
            type="application/pdf"
            className="pdf-viewer"
            width={'80%'}
            height={'400px'}
          >
            <p>حدث خطأ أثناء تحميل الملف، نرجوا المحاولة مجددًا بعد قليل</p>
          </object>
        </Suspense>
      )}
    </main>
  );
}
