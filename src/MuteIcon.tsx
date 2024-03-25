import type { SVGProps } from 'react';
const SvgMuteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.707 2.293a1 1 0 0 0-1.414 1.414L7.56 8.974H7a1 1 0 0 0-1 1v4.01a1 1 0 0 0 1 1h2l5.266 5.692c.618.668 1.734.23 1.734-.68v-2.582l4.293 4.293a1 1 0 0 0 1.414-1.414zM14 15.414l-4.44-4.44H8v2.01h1.874L14 17.444z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M14 6.542v4.044l2 2V4.002c0-.908-1.113-1.346-1.732-.682l-3.634 3.9 1.416 1.415z" />
  </svg>
);
export default SvgMuteIcon;
