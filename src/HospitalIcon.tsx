import type { SVGProps } from 'react';
const SvgHospitalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M13 10.5V9h1.5V7H13V5.5h-2V7H9.5v2H11v1.5z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 22a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.5V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zM4 9h3.5V4h9v5H20v11h-4v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H4zm6 11h4v-5h-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHospitalIcon;
