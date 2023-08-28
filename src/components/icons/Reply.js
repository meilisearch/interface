import * as React from 'react';
const Reply = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="199px" height="173px" viewBox="-0.5 -0.5 199 173" {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d="M 44 63.82 L 103.94 7 L 103.94 44.88 C 154.79 49.84 194 103.54 193.85 168 C 180.57 120.26 143.91 89.37 103.94 92.24 L 103.94 130.12 Z" fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" pointerEvents="all"/>
      <path d="M -31 79 C -31 70.72 -24.28 64 -16 64 L 14 64 C 22.28 64 29 57.28 29 49 C 29 57.28 35.72 64 44 64 L 74 64 C 82.28 64 89 70.72 89 79" fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" transform="rotate(270,29,64)" pointerEvents="all"/>
    </g>
  </svg>
);

export default Reply
