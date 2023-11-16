import React from 'react';
import instagramIcon from '../assets/images/icons/instagram.png';

import xIcon from '../assets/images/icons/x.png';
import facebookIcon from '../assets/images/icons/facebook.png';
import emailIcon from '../assets/images/icons/email.png';
import contactIcon from '../assets/images/icons/contact.png';

function Footer() {
  return (
    <footer>
      <section className="icon-section">
        <div className="contact-us-footer">
          <span>تواصلوا معنا</span>
          <a href="/contact-us">
            <img src={contactIcon} alt="email icon" />
          </a>
        </div>
        <div className="sm-section">
          <span>حسابات عقيل سوار على مواقع التواصل الاجتماعية</span>
          <div className="sm-icons">
            <a
              href="https://www.instagram.com/binswar13/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="instagram icon" />
            </a>
            <a
              href="https://twitter.com/Binswar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={xIcon} alt="twitter icon" />
            </a>
            <a
              href="https://www.facebook.com/aQeel.swar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="facebook icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="copyright-section">
        <span>جميع الحقوق محفوظة © 2023</span>
      </section>
    </footer>
  );
}

export default Footer;
