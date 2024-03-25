import type { SVGProps } from 'react';
const SvgDevicesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M3 7a2 2 0 0 1 2-2h13v2H5v9h7v3H3a2 2 0 0 1-2-2 1 1 0 0 1 1-1h1z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 8v-7h4v7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDevicesIcon;
