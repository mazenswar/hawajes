import { Storage } from 'aws-amplify';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/main-logo-droid-kufi.png';
import logoTwo from '../assets/images/logos/main-logo-urdu.png';
import logoTwoHorizontal from '../assets/images/logos/main-logo-urdu-two.png';
import logoOneBg from '../assets/images/logos/main-logo-1Bg.png';
import logoOneMd from '../assets/images/logos/main-logo-1Md.png';
import logoOneSm from '../assets/images/logos/main-logo-1Sm.png';
import useScreenDimensions from '../components/hooks/useScreenDimensions';

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const ref = useRef(null);

  const { dimensions } = useScreenDimensions();

  useEffect(() => {
    const children =
      document.getElementsByClassName('navigation')[0].children.length;
    const height = ref.current.clientHeight + 'px';
    document.documentElement.style.setProperty('--children', children);
    document.documentElement.style.setProperty('--nav-height', height);
  }, [dimensions]);

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
            اصدارات
          </Link>
        </li>
        <li>
          <Link to="/interviews" onClick={() => setMenuClicked(false)}>
            مقابلات
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
        <Link to="/">
          <img
            src={dimensions.width < 1200 ? logoTwoHorizontal : logoTwo}
            alt="logo"
          />
        </Link>
      </div>
    </nav>
  );
}
