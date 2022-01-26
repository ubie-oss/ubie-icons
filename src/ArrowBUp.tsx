import * as React from "react";

function SvgArrowBUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3356 7.25259C11.7145 6.9158 12.2855 6.9158 12.6644 7.25259L21.6644 15.2526C22.0772 15.6195 22.1143 16.2516 21.7474 16.6644C21.3805 17.0771 20.7484 17.1143 20.3356 16.7474L12 9.33795L3.66437 16.7474C3.25159 17.1143 2.61952 17.0771 2.2526 16.6644C1.88568 16.2516 1.92286 15.6195 2.33565 15.2526L11.3356 7.25259Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowBUp;
