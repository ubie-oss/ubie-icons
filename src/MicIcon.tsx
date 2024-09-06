import type { SVGProps } from 'react';
const SvgMicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0zm6 0v6a2 2 0 1 1-4 0V6a2 2 0 1 1 4 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M7 12a1 1 0 1 0-2 0 7 7 0 0 0 6 6.93V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-1.07A7 7 0 0 0 19 12a1 1 0 1 0-2 0 5 5 0 0 1-10 0"
    />
  </svg>
);
export default SvgMicIcon;
