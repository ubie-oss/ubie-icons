import * as React from 'react';

function SvgCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5C5 4.44772 5.44772 4 6 4H15C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2H6C4.34315 2 3 3.34315 3 5V16C3 16.5523 3.44772 17 4 17C4.55228 17 5 16.5523 5 16V5ZM9 8H19V20H9V8ZM7 8C7 6.89543 7.89543 6 9 6H19C20.1046 6 21 6.89543 21 8V20C21 21.1046 20.1046 22 19 22H9C7.89543 22 7 21.1046 7 20V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCopy;
