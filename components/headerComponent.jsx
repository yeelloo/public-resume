import Link from "next/link";
import Image from "next/image";
// import { logout } from "../utils/auth";

import styles from "../styles/header.module.css";
import mainLogo from '../public/images/main-logo.png';
import stickyLogo from "../public/images/sticky-logo.png";

const Header = (props) => (
  <>
    <header className={styles.siteHeader} data-top="992">
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>

          <div className="site-mobile-logo">
            <a href="index.html" className="logo">
              <Image src={mainLogo} alt="site logo" className="main-logo" />
              <Image src={stickyLogo} alt="site logo" className="sticky-logo" />
            </a>
          </div>

          <nav className={styles.siteNav}>
            <div className="closeMenu">
              <span>Close</span>
              <i className="ei ei-icon_close"></i>
            </div>

            <div className="site-logo">
              <a href="index.html" className="logo">
                <Image src={mainLogo} alt="site logo" className="main-logo" />
                <Image
                  src={stickyLogo}
                  alt="site logo"
                  className="sticky-logo"
                />
              </a>
            </div>

            <div className="menu-wrapper" data-top="992">
              <ul className="site-main-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="resume.html">Resume</a>
                </li>

                <li>
                  <a href="blog.html">Resources</a>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>
              </ul>
              <div className="nav-right">
                <a href="signin.html" className="login-btn">
                  <i className="ei ei-icon_lock_alt"></i>Login
                </a>
                <a href="signup.html" className="nav-btn">
                  Get Started
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </>
);

export default Header;
