import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main id="error-page" className="flex-list-y">
      <h1>الصفحة غير موجودة</h1>
      <Link to="/">الصفحة الرئيسية</Link>
    </main>
  );
}

export default ErrorPage;
