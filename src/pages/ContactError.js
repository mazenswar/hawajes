import React from 'react';
import { Link } from 'react-router-dom';

function ContactError() {
  return (
    <main className="flex-list-y">
      <h1 className="page-title">
        نأسف، لم نستطع إرسال رسالتك، نرجو المحاولة مجددًا بعد قليل
      </h1>
      <Link to="/">الصفحة الرئيسية</Link>
    </main>
  );
}

export default ContactError;
