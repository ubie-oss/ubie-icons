import type { SVGProps } from 'react';
const SvgTrainIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 16a4 4 0 0 1-2.776 3.81l1.483 1.483a1 1 0 0 1-1.414 1.414L14.586 20H9.414l-2.707 2.707a1 1 0 0 1-1.414-1.414l1.483-1.484A4 4 0 0 1 4 16V7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zM6.17 6A3 3 0 0 1 9 4h6c1.306 0 2.418.835 2.83 2zM11 8H6v3h5zm2 3V8h5v3zm-7 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrainIcon;
