import React from 'react';
import logo from 'assets/logo.png';
import Avatar from 'components/Avatar';
import { Link, useRouteMatch } from 'react-router-dom';
import './index.scss';

function HeaderLink({
  label,
  to,
  activeOnlyWhenExact,
  className,
}: {
  label: string | string[];
  to: string;
  activeOnlyWhenExact: boolean;
  className: string;
}) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link className={match ? 'active ' + className : className} to={to}>
      {match && '❤️'} {label}
    </Link>
  );
}

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <a href="http://effy.me" target="_blank" rel="noopener noreferrer">
          <Avatar src={logo} alt="dodo糯" />
        </a>
        <div className="nav__buttons_box">
          <HeaderLink
            className="button nav__button"
            activeOnlyWhenExact={true}
            to="/svg-card1"
            label="SVG Card1"
          />
          <HeaderLink
            className="button nav__button"
            activeOnlyWhenExact={true}
            to="/svg-card2"
            label="SVG Card2"
          />
          <HeaderLink
            className="button nav__button"
            activeOnlyWhenExact={true}
            to="/svg-card3"
            label="SVG Card3"
          />
          <HeaderLink
            className="button nav__button"
            activeOnlyWhenExact={true}
            to="/gra-card"
            label="Default Card"
          />
          <HeaderLink
            className="button nav__button"
            activeOnlyWhenExact={true}
            to="/simple-card"
            label="Simple Card"
          />
        </div>
      </div>
    </nav>
  );
}
