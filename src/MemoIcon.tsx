import type { SVGProps } from 'react';
const SvgMemoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zM7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M8 15a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v16H5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMemoIcon;
