import * as React from 'react';

function SvgPhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 2C2.44772 2 2 2.44772 2 3C2 5.3833 2.3558 7.77712 3.11077 10.027C4.78017 15.002 8.40482 19.2647 14.3561 21.0749C16.3284 21.6748 18.5404 22 21 22C21.5523 22 22 21.5523 22 21V16.5C22 16.0764 21.7331 15.6988 21.3338 15.5574L18.1574 14.4324C17.7265 14.2798 17.247 14.4388 16.9926 14.8186L14.2381 18.9317C9.65326 17.3142 6.74621 14.0049 5.24253 10.0498L8.91265 7.16076C9.23901 6.90386 9.37259 6.47196 9.24826 6.07566L8.18944 2.70066C8.05864 2.28372 7.67227 2 7.23529 2H3Z"
        fill="#3D5FCF"
      />
    </svg>
  );
}

export default SvgPhoneIcon;