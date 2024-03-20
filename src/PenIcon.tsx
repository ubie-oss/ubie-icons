import type { SVGProps } from 'react';
const SvgPenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m18.108 2.307 3.586 3.585a1 1 0 0 1 0 1.415l-12.501 12.5a1 1 0 0 1-.38.238L3.332 21.94A1 1 0 0 1 2.06 20.67l1.895-5.481a1 1 0 0 1 .238-.38l12.5-12.501a1 1 0 0 1 1.415 0m-.707 2.12-.785.785q.048.037.091.081l2 2q.044.045.08.09l.785-.784zM7.18 14.65l8.032-8.033a1 1 0 0 0 .081.091l2 2q.045.044.09.08L9.352 16.82zm-1.412 1.416-1.146 3.313 3.313-1.145z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPenIcon;
