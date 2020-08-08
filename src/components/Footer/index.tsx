import React from 'react';
import Avatar from 'components/Avatar';
import logo from 'assets/logo.png';
import './index.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main_box">
        <div className="footer__container">
          <div className="footer__left_box">
            <a
              className="footer__logo_box"
              href="http://effy.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img className="footer__logo" src={logo} /> */}
              <Avatar src={logo} alt="dodo糯" />
            </a>
            <span className="footer__description footer__description--06">
              Effy is a frontend developer living in Melbourne. <br />
              She likes to create useful tools and Shopify websites.
            </span>
            <ul className="social">
              <li className="social__item social__item--left_margin">
                <a
                  className="social__link social__link--twitter--black"
                  href="http://effy.me"
                  title="Say hello in Twitter!"
                  target="_blank"
                  rel="noopener noreferrer"
                > </a>
              </li>
              <li className="social__item social__item--left_margin">
                <a
                  className="social__link"
                  href="http://effy.me"
                  title="Discover us on Dribbble!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M4.99998 10C7.75695 10 9.99989 7.75689 9.99989 4.99976C9.99989 2.24288 7.75695 0 4.99998 0C2.24301 0 6.48499e-05 2.24288 6.48499e-05 4.99976C6.48499e-05 7.75689 2.24304 10 4.99998 10ZM4.99998 8.83541C4.20796 8.83541 3.45585 8.59828 2.8124 8.14752C3.07481 7.71219 3.87241 6.62136 5.58089 5.96965C6.01155 7.13722 6.23088 8.13355 6.31989 8.60091C5.89847 8.75662 5.4554 8.83541 4.99998 8.83541ZM7.43552 7.95851C7.33886 7.48623 7.14381 6.65523 6.80525 5.67613C6.97645 5.65908 7.15178 5.65048 7.32956 5.65048C7.95008 5.65048 8.46785 5.75429 8.74125 5.82251C8.55865 6.65685 8.09567 7.41214 7.43552 7.95851ZM8.1384 2.81513C8.52258 3.36515 8.75686 4.01092 8.81493 4.67929C8.46262 4.62145 7.85904 4.5432 7.17204 4.5432C6.89979 4.5432 6.6362 4.55571 6.38595 4.5804C6.37938 4.56472 6.37275 4.54897 6.36605 4.53317C6.31383 4.41107 6.2578 4.28581 6.19872 4.15882C7.21949 3.70093 7.83806 3.14011 8.1384 2.81513ZM4.99998 1.17674C5.85964 1.17674 6.69061 1.4661 7.36397 1.99597C7.13181 2.25552 6.60278 2.74967 5.67165 3.13452C5.20743 2.30434 4.73106 1.60051 4.45869 1.21503C4.63729 1.18957 4.81833 1.17674 4.99998 1.17674ZM3.19582 1.6294C3.42045 1.94575 3.91593 2.66386 4.41615 3.52379C3.07068 3.84819 1.88841 3.9186 1.32407 3.93232C1.61172 2.9523 2.2906 2.11524 3.19582 1.6294ZM4.99093 4.58675C5.03452 4.67485 5.07629 4.76167 5.11629 4.84688C3.4168 5.43096 2.36174 6.73358 1.95397 7.32395C1.46972 6.68904 1.19604 5.92041 1.17223 5.12036C1.76394 5.11417 3.34159 5.05021 4.99093 4.58675Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="social__item social__item--left_margin">
                <a
                  className="social__link social__link--facebook--black"
                  href="http://effy.me"
                  title="Say hello in Facebook!"
                  target="_blank"
                  rel="noopener noreferrer"
                > </a>
              </li>
              <li className="social__item social__item--left_margin">
                <a
                  className="social__link"
                  href="http://effy.me"
                  title="Follow us on Instagram!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M6.875 0H3.125C1.39938 0 0 1.39938 0 3.125V6.875C0 8.60063 1.39938 10 3.125 10H6.875C8.60063 10 10 8.60063 10 6.875V3.125C10 1.39938 8.60063 0 6.875 0ZM9.0625 6.875C9.0625 8.08125 8.08125 9.0625 6.875 9.0625H3.125C1.91875 9.0625 0.9375 8.08125 0.9375 6.875V3.125C0.9375 1.91875 1.91875 0.9375 3.125 0.9375H6.875C8.08125 0.9375 9.0625 1.91875 9.0625 3.125V6.875Z"
                      fill="black"
                    ></path>
                    <path
                      d="M5 2.5C3.61937 2.5 2.5 3.61937 2.5 5C2.5 6.38062 3.61937 7.5 5 7.5C6.38062 7.5 7.5 6.38062 7.5 5C7.5 3.61937 6.38062 2.5 5 2.5ZM5 6.5625C4.13875 6.5625 3.4375 5.86125 3.4375 5C3.4375 4.13812 4.13875 3.4375 5 3.4375C5.86125 3.4375 6.5625 4.13812 6.5625 5C6.5625 5.86125 5.86125 6.5625 5 6.5625Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.6875 2.64562C7.87148 2.64562 8.02063 2.49648 8.02063 2.3125C8.02063 2.12853 7.87148 1.97938 7.6875 1.97938C7.50352 1.97938 7.35437 2.12853 7.35437 2.3125C7.35437 2.49648 7.50352 2.64562 7.6875 2.64562Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__right_box">
            <ul className="footer__menu footer__menu--06">
              <li className="footer__menu__item footer__menu__footer">
                <span className="footer__menu__title">other projects</span>
              </li>
              <li className="footer__menu__item">
                <a
                  className="footer__menu__link"
                  href="http://effy.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Effy's Website
                </a>
              </li>
              <li className="footer__menu__item">
                <a
                  className="footer__menu__link"
                  href="http://effy.me/monsters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vue Demos
                </a>
              </li>
              <li className="footer__menu__item">
                <a
                  className="footer__menu__link"
                  href="http://blog.effy.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Effy's Blog
                </a>
              </li>
            </ul>
            <ul className="footer__menu footer__menu--06">
              <li className="footer__menu__item footer__menu__footer">
                <span className="footer__menu__title">get in touch</span>
              </li>
              <li className="footer__menu__item">
                <a
                  className="footer__menu__link"
                  href="/about"
                  data-goal-id="CLICK__about--footer"
                >
                  About
                </a>
              </li>
              <li className="footer__menu__item">
                <a
                  className="footer__menu__link"
                  href="mailto:effy.yin@gmail.com?subject=!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="footer__menu footer__menu--06">
              <li className="footer__menu__item footer__menu__footer">
                <span className="footer__menu__title">follow the best</span>
              </li>
              <li className="footer__menu__item">
                <form
                  className="validate js-subscribe-form footer__form"
                  id="mc-embedded-subscribe-form"
                  method="post"
                >
                  <input
                    className="footer__input"
                    id="mce-EMAIL"
                    type="email"
                    placeholder="Your email"
                    name="EMAIL"
                    required
                  />
                  <div className="clear" id="mce-responses">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: ' none' }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    ></div>
                  </div>

                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_c753049c0b6c0ccd061d10786_ed8c01b32e"
                      tabIndex={-1}
                      defaultValue="1"
                    />
                  </div>
                  <button
                    className="footer__button"
                    id="mc-embedded-subscribe"
                    type="submit"
                  ></button>

                  <div className="js-error-message footer__message footer__message--red">
                    Sorry, internal error.
                  </div>
                  <div className="js-success-message footer__message footer__message--green">
                    Thanks!
                    <br />
                    Please click the link in the email we've just sent you.
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
