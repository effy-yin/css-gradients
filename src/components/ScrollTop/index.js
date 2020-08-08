import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';

const ScrollTop = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: document.querySelector('.app-main-content-wrapper') || window,
    threshold: 400,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{ position: 'fixed', bottom: '10px', right: '10px' }}
      >
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;
