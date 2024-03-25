import type { SVGProps } from 'react';
const SvgFileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 4H6v16h7v-6h5zm2 12.914L14.914 22H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2-.828V16h-3v3.086z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileIcon;
