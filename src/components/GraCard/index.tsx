import React, { useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import { GradientInfo, ClickState } from '../../App';

const GraCard = ({
  info,
  onCardClick,
}: {
  info: GradientInfo;
  onCardClick: Function;
}) => {
  const [copyClickState, setCopyClickState] = useState(ClickState.unClicked);

  const handleCopyClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const gradientCSS = getComputedStyle(
      document.getElementsByClassName(info.class)[0]
    ).backgroundImage;
    navigator.clipboard.writeText(gradientCSS).then(
      function () {
        /* clipboard successfully set */
        setCopyClickState(ClickState.clicked);
        setTimeout(() => {
          setCopyClickState(ClickState.completed);
        }, 1500);
        setTimeout(() => {
          setCopyClickState(ClickState.unClicked);
        }, 2000);
      },
      function () {
        /* clipboard write failed */
        console.log('copy failed');
      }
    );
  };
  const handleDownloadClick = () => {};

  const wrapperClass = classnames(
    'card',
    'js-appearing-card',
    {
      'state-done-message-visible':
        copyClickState === ClickState.clicked ||
        copyClickState === ClickState.completed,
    },
    { 'state-done-message-gone': copyClickState === ClickState.completed }
  );

  return (
    <div className={wrapperClass}>
      <span className="gradient__title">
        {info.index} {info.name}
      </span>
      <span onClick={handleDownloadClick} className="gradient__download_button">
        Copy Class
      </span>
      <div
        onClick={(e) => onCardClick(e.clientX, e.clientY)}
        className={'gradient__background ' + info.class}
        title="View Fullscreen"
      ></div>
      <div className="gradient__colors_box">
        <span className="gradient__color">{info.gradient[0].color}</span>
        <span className="gradient__arrow_symbol">→</span>
        <span className="gradient__color">
          {info.gradient[info.gradient.length - 1].color}
        </span>
      </div>
      <button onClick={handleCopyClick} className="gradient__copy_button">
        Copy CSS
      </button>
      <div className="gradients__copy_message">
        <textarea className="gradients__code_text" defaultValue="."></textarea>
      </div>
      <div className="gradients__done_message">
        <div className="gradients__done_message_box">
          <span
            className="gradients__done_emoji"
            role="img"
            aria-label="success"
          >
            ️🍰
          </span>
          <br />
          <span className="gradients__done_word">Great Job!</span>
        </div>
      </div>

      {/* <canvas ref={myRef} width='800' height='200' className={info.class} style={{ display: 'block' }} />
      <img ref={imgRef} src='' alt='gradient' /> */}
    </div>
  );
};

export default GraCard;
