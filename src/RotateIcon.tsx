import type { SVGProps } from 'react';
const SvgRotateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M2.206 9.65a1 1 0 0 1-.291-.702V3.991c0-.547.445-.991.995-.991s.996.444.996.991v2.332c1.702-1.336 3.879-2.549 6.381-2.997 3.447-.618 7.368.242 11.312 3.906.402.374.423 1.001.048 1.401a1 1 0 0 1-1.407.049c-3.525-3.275-6.823-3.903-9.6-3.405-2.15.385-4.071 1.462-5.598 2.68h2.847c.55 0 .996.444.996.991a.994.994 0 0 1-.996.992H2.91a1 1 0 0 1-.704-.29"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.678 13.7a.99.99 0 0 0 0 1.402l5.633 5.608a1 1 0 0 0 1.408 0l5.633-5.608a.99.99 0 0 0 0-1.402l-5.633-5.608a1 1 0 0 0-1.408 0zm2.113.7 4.224 4.207L19.24 14.4l-4.225-4.206z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRotateIcon;
