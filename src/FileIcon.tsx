import * as React from 'react';

function SvgFileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4L6 4L6 20H13V15V14H14H18L18 4ZM20 14V15V16V16.5V16.9142L19.7071 17.2071L15.2071 21.7071L14.9142 22H14.5H14H13H5C4.44771 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V14ZM18 16.0858V16H15V19.0858L18 16.0858Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFileIcon;
