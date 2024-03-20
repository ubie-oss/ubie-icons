import type { SVGProps } from 'react';
const SvgSecurityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.207 9.707a1 1 0 1 0-1.414-1.414l-3.367 3.367-1.801-1.44a1 1 0 0 0-1.25 1.56l2.5 2a1 1 0 0 0 1.332-.073z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.243 2.03a1 1 0 0 0-.486 0l-8 2A1 1 0 0 0 3 5v6c0 6.62 5.848 9.543 8.467 10.851l.086.043a1 1 0 0 0 .853.02C15.392 20.587 21 17.685 21 11V5a1 1 0 0 0-.758-.97zM5 11V5.78l7-1.75 7 1.75V11c0 5.067-3.993 7.514-6.977 8.892C9.233 18.478 5 16.042 5 11"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSecurityIcon;
