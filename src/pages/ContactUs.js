import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        navigate('/contact-us-success');
      },
      (error) => {
        console.log(error.text);
        navigate('/contact-us-error');
      }
    );
  };
  return (
    <main id="contact-us-page">
      <form ref={form} onSubmit={sendEmail}>
        <h1 className="page-title">تواصلكم يشرفنا</h1>

        <section>
          <label>الاسم</label>
          <input type="text" name="from_name" />
        </section>
        <section>
          <label>البريد الإلكتروني</label>
          <input type="email" name="reply_to" />
        </section>
        <section>
          <label>الرسالة</label>
          <textarea name="message" />
        </section>
        <input type="submit" value="ارسل" />
      </form>
    </main>
  );
}

export default ContactUs;

const serviceId = 'service_5e161o5';
const templateId = 'template_29urcna';
const publicKey = 'tZtFwo2bfs0nRg89Z';
