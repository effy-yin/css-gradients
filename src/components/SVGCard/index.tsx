import React, { useRef } from 'react';
import './index.scss';
import gsap from 'gsap';
import { GradientInfo } from '../../App';

const SVGCard = ({ info }: { info: GradientInfo }) => {
  const initPath =
    'm 0,0 0,171.14385 c 24.580441,15.47138 55.897012,24.75772 90,24.75772 34.10299,0 65.41956,-9.28634 90,-24.75772 L 180,0 0,0 z';
  const hoverPath =
    'm 0, 0 0, 47.7775 c 24.580441, 3.12569 55.897012, -8.199417 90, -8.199417 34.10299, 0 65.41956, 11.325107 90, 8.199417 L 180, 0 z';

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
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
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
        {/* <img src={} alt="" /> */}
        <span ref={bgRef} className={info.class}></span>
        <svg viewBox="0 0 180 320" preserveAspectRatio="none">
          <path ref={pathRef} d={initPath} />
        </svg>
        <figcaption>
          <h2>{info.name}</h2>
          <br />
          <p>
            {info.gradient[0].color}->
            {info.gradient[info.gradient.length - 1].color}
          </p>
          <button onClick={handleClick}>Click me</button>
        </figcaption>
      </figure>
    </span>
  );
};

export default SVGCard;
