import React from 'react';
import './index.css';

export default function Logo(props: any) {
  return (
    <img
      className="avatar"
      src={props.src}
      width="props.width"
      height="props.height"
      alt="props.alt"
    />
  );
}
