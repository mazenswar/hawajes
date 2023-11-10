import React from 'react';
import { Link } from 'react-router-dom';

function ContactSuccess() {
  return (
    <main className="flex-list-y">
      <h1 className="page-title">تم إرسال رسالتك بنجاح، شكرًا لتواصلكم معنا</h1>
      <Link to="/">الصفحة الرئيسية</Link>
    </main>
  );
}

export default ContactSuccess;
