import React from 'react';

export default function TheatreHeader() {
  return (
    <section id="theatre-header">
      <img
        className="header-background"
        src="/dev/images/headers/theatre-header.png"
        alt="background"
      />
      <div className="header-content">
        <h2 className="linebreak header-quote">
          افتقدت وجود نشاط جاد لكتابة المسرحية..{'\n'} فكانت مسرحية البراحة التي
          تعدى صداها البحرين لتصل إلى دول الخليج!
        </h2>
        <img
          className="header-headshot"
          src="dev/images/aqeel-theatre.jpg"
          alt="aqeel-headshot"
        />
      </div>
    </section>
  );
}
