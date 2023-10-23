import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const children =
      document.getElementsByClassName('navigation')[0].children.length;
    const height = ref.current.clientHeight + 'px';
    document.documentElement.style.setProperty('--children', children);
    document.documentElement.style.setProperty('--nav-height', height);
  }, [document.clientHeight]);

  return (
    <nav ref={ref}>
      <ul className={menuClicked ? 'navigation active' : 'navigation'}>
        <li>
          <Link to="/" onClick={() => setMenuClicked(false)}>
            الرئيسية
          </Link>
        </li>
        <li>
          <Link to="/photography" onClick={() => setMenuClicked(false)}>
            تصوير
          </Link>
        </li>
        <li>
          <Link to="/mawwal" onClick={() => setMenuClicked(false)}>
            مواويل
          </Link>
        </li>
        <li>
          <Link to="/theatre" onClick={() => setMenuClicked(false)}>
            مسرح
          </Link>
        </li>
        <li>
          <Link to="/journalism" onClick={() => setMenuClicked(false)}>
            صحافة
          </Link>
        </li>
        <li>
          <Link to="/publications" onClick={() => setMenuClicked(false)}>
            اصدارات ومؤلفات
          </Link>
        </li>
      </ul>
      <div
        className={menuClicked ? 'menu active' : 'menu'}
        id="menu"
        onClick={() => setMenuClicked(!menuClicked)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div role="heading" aria-level="1" className="header">
        <Link to="/">عقيل سوار</Link>
      </div>
    </nav>
  );
}
