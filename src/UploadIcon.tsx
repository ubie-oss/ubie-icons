import type { SVGProps } from 'react';
const SvgUploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.6 3.2a1 1 0 0 0-1.2 0l-4 3a1 1 0 1 0 1.2 1.6L11 6v9a1 1 0 1 0 2 0V6l2.4 1.8a1 1 0 0 0 1.2-1.6z"
    />
    <path
      fill="currentColor"
      d="M21 11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h16v-7a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgUploadIcon;
