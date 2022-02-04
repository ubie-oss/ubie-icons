import * as React from 'react';

function SvgFirstAidBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4H9V6H15V4ZM7 4V6H4C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V11V8C22 6.89543 21.1046 6 20 6H17V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4ZM20 10V8H15H9H4V10H20ZM4 12H20V19H4V12ZM13 16.5002V18H11V16.5002H9.5V14.5002H11V13H13V14.5002H14.5V16.5002H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFirstAidBox;
