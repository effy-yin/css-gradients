import React from 'react';
import classnames from 'classnames';
import { GradientInfo } from 'App';
import './index.scss';

interface Props {
  info: GradientInfo;
  onCardClick?: (x: number, y: number) => void;
}

const SimCard = ({ info, onCardClick }: Props) => {
  const className = classnames('dot', info.class);

  return (
    <div className="simple-card js-appearing-card">
      <span
        onClick={(e) =>
          onCardClick ? onCardClick(e.clientX, e.clientY) : null
        }
        className={className}
      ></span>
    </div>
  );
};

export default SimCard;
