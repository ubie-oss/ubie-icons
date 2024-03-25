import type { SVGProps } from 'react';
const SvgExpansionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21.707 2.293A1 1 0 0 1 22 3v5a1 1 0 1 1-2 0V5.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L18.586 4H16a1 1 0 1 1 0-2h5a1 1 0 0 1 .707.293M2.293 21.707A1 1 0 0 1 2 21v-5a1 1 0 1 1 2 0v2.586l4.293-4.293a1 1 0 0 1 1.414 1.414L5.414 20H8a1 1 0 1 1 0 2H3a1 1 0 0 1-.707-.293"
    />
  </svg>
);
export default SvgExpansionIcon;
