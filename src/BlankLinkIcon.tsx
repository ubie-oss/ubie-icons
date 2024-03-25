import type { SVGProps } from 'react';
const SvgBlankLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21.707 2.293A1 1 0 0 1 22 3v5a1 1 0 1 1-2 0V5.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L18.586 4H16a1 1 0 1 1 0-2h5a1 1 0 0 1 .707.293"
    />
    <path fill="currentColor" d="M4 4h7v2H4v14h14v-7h2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgBlankLinkIcon;
