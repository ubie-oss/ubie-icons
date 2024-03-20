import type { SVGProps } from 'react';
const SvgSortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M6.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 6.414V20a1 1 0 1 1-2 0V6.414L3.707 8.707a1 1 0 0 1-1.414-1.414zM18 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 17.586V4a1 1 0 1 1 2 0z"
    />
  </svg>
);
export default SvgSortIcon;
