import type { SVGProps } from 'react';
const SvgPostIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M4 20V4h15v7h2V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8v-2z" />
    <path
      fill="currentColor"
      d="M7 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zM7 10a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM17 12a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgPostIcon;
