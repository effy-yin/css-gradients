import React, { useRef } from 'react';
import pathData from './pathData.json';
import gsap from 'gsap';
import { GradientInfo } from 'App';
import './index.scss';

interface Props {
  info: GradientInfo;
  onCardClick?: (x: number, y: number) => void;
  type?: string;
}

const SVGCard = ({ info, onCardClick, type }: Props) => {
  const pathType: string = type ? type : 'arc';
  const { initPath, hoverPath } = (pathData as any)[pathType];

  const pathRef = useRef<SVGPathElement>(null);
  const handleMouseEnter: React.MouseEventHandler<HTMLSpanElement> = () => {
    gsap.fromTo(
      pathRef.current,
      {
        attr: { d: initPath },
      },
      {
        attr: { d: hoverPath },
        duration: 0.5,
        ease: 'power4.out',
      }
    );
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLSpanElement> = () => {
    gsap.fromTo(
      pathRef.current,
      {
        attr: { d: hoverPath },
      },
      {
        attr: { d: initPath },
        duration: 0.5,
        ease: 'bounce',
      }
    );
  };

  const bgRef = useRef<HTMLSpanElement>(null);
  const handleClick: React.MouseEventHandler<HTMLElement> = () => {
    const BgEle: HTMLDivElement | null = document.querySelector(
      '.main-container'
    );
    BgEle &&
      bgRef.current &&
      (BgEle.style.backgroundImage = getComputedStyle(
        bgRef.current
      ).backgroundImage);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="svg-card js-appearing-card"
    >
      <figure>
        <span ref={bgRef} className={info.class}></span>
        <svg viewBox="0 0 180 320" preserveAspectRatio="none">
          <path ref={pathRef} d={initPath} />
        </svg>
        <figcaption>
          <h2>{info.name}</h2>
          <p>
            {info.gradient[0].color}->
            {info.gradient[info.gradient.length - 1].color}
          </p>
          <button
            onClick={(e) =>
              onCardClick ? onCardClick(e.clientX, e.clientY) : null
            }
          >
            Click me
          </button>
          <div className="label" onClick={handleClick}>
            <em style={{ background: info.gradient[0].color }}></em>
            click to change bg
            <em
              style={{
                background: info.gradient[info.gradient.length - 1].color,
              }}
            ></em>
          </div>
        </figcaption>
      </figure>
    </span>
  );
};

export default SVGCard;
