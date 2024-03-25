import type { SVGProps } from 'react';
const SvgCopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M5 5a1 1 0 0 1 1-1h9a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v11a1 1 0 1 0 2 0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm2 0h10v12H9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopyIcon;
