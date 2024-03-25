import type { SVGProps } from 'react';
const SvgTrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M15 11a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 6V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2zm-2-2H9v2h6zm2 4H7v12h10z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrashIcon;
