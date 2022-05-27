import * as React from 'react';

function SvgMemoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
        fill="currentColor"
      />
      <path
        d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
        fill="currentColor"
      />
      <path
        d="M8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4ZM5 4H19V20H5L5 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMemoIcon;
