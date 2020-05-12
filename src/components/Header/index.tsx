import React from 'react';
import './index.scss';
import logo from '../../static/logo.png';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <a href="http://effy.me" target="_blank" rel="noopener noreferrer">
          <Avatar src={logo} alt="dodo糯" />
        </a>
        <div className="nav__buttons_box">
          <Link className="button button--blank nav__button" to="/svg-card1">
            SVG card1
          </Link>
          <Link className="button button--blank nav__button" to="/svg-card2">
            SVG card2
          </Link>
          <Link className="button button--blank nav__button" to="/svg-card3">
            SVG card3
          </Link>
          <Link className="button button--blank nav__button" to="/gra-card">
            default card
          </Link>
          <Link className="button button--blank nav__button" to="/simple-card">
            simple card
          </Link>
        </div>
      </div>
    </nav>
  );
}
