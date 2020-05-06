import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import gradientsData from './static/gradients.json';
import './static/gradients.css';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import GraCard from './components/GraCard';
import SimCard from './components/SimCard';
import SVGCard from './components/SVGCard';
import ScrollReveal from 'scrollreveal';
import classnames from 'classnames';

export type GradientInfo = {
  class: string;
  name?: string;
  favorite?: boolean;
  index?: string;
  deg?: number;
  group?: string[];
  gradient: { color: string; pos: number }[];
};
export enum ClickState {
  unClicked = 'unClicked',
  clicked = 'clicked',
  completed = 'completed',
}

const App = () => {
  let location = useLocation();

  useEffect(() => {
    const htmlClass = location.pathname.substr(1).replace(/[0-9]/, '');
    const htmlEle: HTMLHtmlElement | null = document.querySelector('html');
    htmlEle && (htmlEle.className = 'html_' + htmlClass);

    ScrollReveal().reveal('.js-appearing-card', {
      origin: 'bottom',
      distance: '18%',
      duration: 800,
      delay: 0,
      rotate: {
        x: 0,
        y: 0,
        z: 0,
      },
      opacity: 0.1,
      scale: 0.99,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      container: window.document.documentElement,
      mobile: !1,
      reset: !1,
      useDelay: 'always',
      viewFactor: 0.2,
      viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    });
  }, [location.pathname]);

  const [curGradient, setCurGradient] = useState('');
  const [viewClickState, setViewClickState] = useState(ClickState.unClicked);
  const [cursorXY, setCursorXY] = useState([-1500, -1500]);

  const coverClass = classnames(
    curGradient,
    'full_gradient',
    {
      'state-full':
        viewClickState === ClickState.clicked ||
        viewClickState === ClickState.completed,
    },
    { 'state-complete': viewClickState === ClickState.completed }
  );
  const handleCardClick = (x: number, y: number) => {
    setViewClickState(ClickState.clicked);
    setTimeout(() => {
      setViewClickState(ClickState.completed);
    }, 1000);
    setCursorXY([x - 1500, y - 1500]);
  };

  return (
    <div className="App">
      <Header />
      <section className="main-container">
        <div className="grid-wrapper">
          <Switch>
            <Route path="/svg-card1">
              {gradientsData.map((info: GradientInfo) => (
                <SVGCard info={info} key={info.class} />
              ))}
            </Route>
            {/* <Route path="/svg-card2">
            <div className="grid-wrapper grid demo2">
              {gradientsData.map(info => <SVGCard info={info} key={info.class} initPath='M180,160C180,160,0,218,0,218C0,218,0,0,0,0C0,0,180,0,180,0C180,0,180,160,180,160' hoverPath='m 180,34.57627 -180,0 L 0,0 180,0 z' />)}
            </div>
          </Route>
          <Route path="/svg-card3">
            <div className="grid-wrapper grid demo2">
              {gradientsData.map(info => <SVGCard info={info} key={info.class} initPath='M0,0C0,0,0,182,0,182C0,182,90,126.5,90,126.5C90,126.5,180,182,180,182C180,182,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0' hoverPath='M 0,0 0,38 90,58 180.5,38 180,0 z' />)}
            </div>
          </Route> */}
            <Route path="/simple-card">
              {gradientsData.map((info: GradientInfo) => (
                <SimCard info={info} key={info.class} />
              ))}
            </Route>
            <Route path="/gra-card">
              {gradientsData.map((info: GradientInfo) => (
                <GraCard
                  info={info}
                  key={info.class}
                  onCardClick={(x: number, y: number) => {
                    setCurGradient(info.class);
                    handleCardClick(x, y);
                  }}
                />
              ))}
            </Route>
            <Route path="/">
              {gradientsData.map((info: GradientInfo) => (
                <SVGCard info={info} key={info.class} />
              ))}
            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
      <div
        onClick={() => setViewClickState(ClickState.unClicked)}
        className={coverClass}
        style={{ left: cursorXY[0] + 'px', top: cursorXY[1] + 'px' }}
      ></div>
    </div>
  );
};

export default App;
