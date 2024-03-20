import type { SVGProps } from 'react';
const SvgLockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 7v2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V7c0-2.469-1.868-5-5-5S7 4.531 7 7m5-3c-1.868 0-3 1.469-3 3v2h6V7c0-1.531-1.132-3-3-3m-6 7v9h12v-9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLockIcon;
