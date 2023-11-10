import React, { useEffect, useState } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import useScreenDimensions from '../components/hooks/useScreenDimensions';

function LandingPage() {
  // async function getArticles() {
  const { headshot, header, headerBg, headerSm } = useLoaderData();
  const { dimensions } = useScreenDimensions();

  return (
    <main id="landing-page">
      <section className="page-header">
        <img src={dimensions.width < 500 ? headerSm : headerBg} alt="header" />
      </section>
      <section className="intro">
        <p className="linebreak">{landingParagraphOne}</p>
        <p className="linebreak">{landingParagraphTwo}</p>
        <p className="linebreak">{landingParagraphThree}</p>
        {list}
        <p>{landingParagraphFour}</p>
      </section>
    </main>
  );
}

export default LandingPage;

const landingParagraphOne =
  'عقيل خليل إبراهيم آل سوار ، مصورٌ، وكاتبٌ صحفي وأدبي من مواليد المنامة سنة ١٩٤٥، متزوج وله ابنتين وولد، وحفيدتان.\n\nبدأ حياته العملية موظفًا في قسم التموين في شركة طيران الخليج.، ولكنه باكتشافه شغفه بالتصوير الفوتوغرافي أنشأ مؤسسة "بنسوار" للتصوير، كما كان المصور الرسمي لشركة طيران الخليج وفندق الخليج في العام ١٩٧٠. قاده شغفه بالتصوير إلى عالم الصحافة، فبدأ مشواره صحفيًا في مجلة صدى الأسبوع (أسبوعية) من العام ١٩٧٣ وحتى ١٩٧٧، ليعود إليها في ١٩٨٢ مديرًا للتحرير.';

const landingParagraphTwo =
  'في عام ١٩٨٣ ساهم في تأسيس وإدارة تحرير مجلة بانوراما الخليج (شهرية) مع الأستاذ إبراهيم بشمي. وبين عامي ١٩٨٦ و١٩٩٦ بدأ بكتابة عمودٍ يومي في جريدة أخبار الخليج بعنوان "هواجس"، وانتقل بعموده اليومي في العام ١٩٩٧ إلى جريدة الأيام، واستمر في كتابته حتى العام ٢٠٠٥. في العام ٢٠٠٥ باشر العمل في جريدة الوطن مقدمًا ورشًا تدريبية للصحفيين، قبل أن يعاود كتابة عموده اليومي "هواجس" حتى تقاعده في ٢٠١٢.';

const landingParagraphThree =
  'بعد التقاعد، واصل آل سوار نشر كتابات، ومواويل شعبية، وصور فوتوغرافية من أرشيفه على حساباته في مواقع التواصل الاجتماعي، والتي حظيت بتفاعل كبير ومميز من قبل قرائه ومتابعيه على تلك المواقع، كما كانت له تجربة ثرية في مجال الكتابة المسرحية بدأها منذ مطلع الثمانينات، حيث تولى مسرح أوال إنتاج أغلب مسرحياته وهي:';

const list = (
  <ul>
    <Link className="link" to="/theatre/baraha">
      <li>البراحة (١٩٨٠)</li>
    </Link>
    <Link className="link" to="/theatre/rajol">
      <li>
        رجل من عامة الناس (١٩٨٤) - فازت بجائزة وزارة الإعلام البحرينية كأفضل نص
        مسرحي وشاركت في مهرجان بغداد المسرحي في ١٩٨٧
      </li>
    </Link>
    <Link className="link" to="/theatre/bint">
      <li>بنت النوخذة (١٩٨٦)</li>
    </Link>
    <Link className="link" to="/theatre/khamees">
      <li>خميس وجمعة (١٩٨٩)</li>
    </Link>
    <Link className="link" to="/theatre/afa">
      <li>أفا يا عبيد (١٩٨٩)</li>
    </Link>
    <Link className="link" to="/theatre/soug">
      <li>سوق المقاصيص (١٩٩١)</li>
    </Link>
    <Link className="link" to="/theatre/juwaira">
      <li>
        جويرة (١٩٩٧) - الورشة المسرحية مع المخرج العراقي الراحل د.عوني كرومي
      </li>
    </Link>
    <Link className="link" to="/theatre/rab">
      <li>ربع المكدة (٢٠١٠)</li>
    </Link>
    <Link className="link" to="/theatre/tafateef">
      <li>الطفاطيف (٢٠١٦)</li>
    </Link>
  </ul>
);

const landingParagraphFour =
  'لم تتوقف  ابداعاته الأدبية عند المسرح، فله كتابان في مجال أدب الطفل هما "حكاية قوس قزح" و"هولاكو والأسرى الأربعة" الصادرة عن دائرة ثقافة الأطفال التابعة لوزارة الثقافة والإعلام العراقية؛ وله إصداران في مجال المواويل الشعبية: "مواويل بحرينية" الصادر عام 1994، و"مكاكة عشق" الصادر عام 2018 عن المؤسسة العربية للدراسات والنشر وهيئة البحرين للثقافة والآثار.';
