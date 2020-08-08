import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import gradientsData from 'assets/gradients.json';
import 'assets/gradients.css';
import 'App.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import GraCard from 'components/GraCard';
import SimCard from 'components/SimCard';
import SVGCard from 'components/SVGCard';
import ScrollTop from 'components/ScrollTop';
import { Fab } from '@material-ui/core';
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
  NotClicked,
  Clicked,
  Completed,
}

const App = () => {
  let location = useLocation();

  useEffect(() => {
    try {
      // trying to use new API
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      console.log(123);
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    ScrollReveal().reveal('.js-appearing-card', {
      origin: 'bottom',
      distance: '18%',
      duration: 600,
      delay: 0,
      rotate: {
        x: 0,
        y: 0,
        z: 0,
      },
      opacity: 0,
      scale: 0.99,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      container: window.document.documentElement,
      mobile: !1,
      reset: false,
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

  useEffect(() => {
    const htmlClass = location.pathname.substr(1).replace(/[0-9]/, '');
    const htmlEle: HTMLHtmlElement | null = document.querySelector('html');
    htmlEle && (htmlEle.className = 'html_' + htmlClass);
  });

  const [curGradient, setCurGradient] = useState('');
  const [viewClickState, setViewClickState] = useState(ClickState.NotClicked);
  const [cursorXY, setCursorXY] = useState([-1500, -1500]);

  const coverClass = classnames(
    curGradient,
    'full_gradient',
    {
      'state-full':
        viewClickState === ClickState.Clicked ||
        viewClickState === ClickState.Completed,
    },
    { 'state-complete': viewClickState === ClickState.Completed }
  );

  const handleCardClick = (x: number, y: number) => {
    setViewClickState(ClickState.Clicked);
    setTimeout(() => {
      setViewClickState(ClickState.Completed);
    }, 1000);
    setCursorXY([x - 1500, y - 1500]);
  };

  return (
    <div className="App">
      <Header />
      <section className="main-container">
        <div id="back-to-top-anchor" />
        <div className="grid-wrapper">
          <Switch>
            {['arc', 'triangle', 'oblique'].map((type, i) => (
              <Route path={`/svg-card${i + 1}`} key={type}>
                {gradientsData.map((info: GradientInfo) => (
                  <SVGCard
                    key={info.class}
                    type={type}
                    info={info}
                    onCardClick={(x: number, y: number) => {
                      setCurGradient(info.class);
                      handleCardClick(x, y);
                    }}
                  />
                ))}
              </Route>
            ))}

            <Route path="/simple-card">
              {gradientsData.map((info: GradientInfo) => (
                <SimCard
                  key={info.class}
                  info={info}
                  onCardClick={(x: number, y: number) => {
                    setCurGradient(info.class);
                    handleCardClick(x, y);
                  }}
                />
              ))}
            </Route>
            <Route path="/gra-card">
              {gradientsData.map((info: GradientInfo) => (
                <GraCard
                  key={info.class}
                  info={info}
                  onCardClick={(x: number, y: number) => {
                    setCurGradient(info.class);
                    handleCardClick(x, y);
                  }}
                />
              ))}
            </Route>
            <Redirect from="/" to="/gra-card" />
          </Switch>
        </div>
      </section>
      <Footer />
      <div
        className={coverClass}
        style={{ left: cursorXY[0] + 'px', top: cursorXY[1] + 'px' }}
        onClick={() => setViewClickState(ClickState.NotClicked)}
      ></div>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          ⬆
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default App;
