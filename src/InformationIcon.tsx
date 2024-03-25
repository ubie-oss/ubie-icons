import type { SVGProps } from 'react';
const SvgInformationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M11 12a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zM12 7a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 7"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInformationIcon;
