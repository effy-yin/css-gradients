import React from 'react';
import './index.scss';
import classnames from 'classnames';
import { GradientInfo } from '../../App';

const SimCard = ({
  info,
  onCardClick,
}: {
  info: GradientInfo;
  onCardClick: Function;
}) => {
  const className = classnames('dot', info.class);

  return (
    <div className="simple-card js-appearing-card">
      <span
        onClick={(e) => onCardClick(e.clientX, e.clientY)}
        className={className}
      ></span>
    </div>
  );
};

export default SimCard;
