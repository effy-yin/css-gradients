import React from 'react';
import './index.css';
import classnames from 'classnames';
import { GradientInfo } from '../../App';

const SimCard = ({ info }: { info: GradientInfo }) => {
  const className = classnames('dot', info.class);

  const handleClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    const BgEle: HTMLSpanElement | null = document.querySelector(
      '.main-container'
    );

    BgEle &&
      (BgEle.style.backgroundImage = getComputedStyle(
        e.target as HTMLElement
      ).backgroundImage);
  };

  return (
    <div className="simple-card js-appearing-card">
      <span onClick={(e) => handleClick(e)} className={className}></span>
    </div>
  );
};

export default SimCard;
