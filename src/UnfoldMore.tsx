import * as React from 'react';

function SvgUnfoldMore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.7526 15.3356C7.11952 14.9229 7.75159 14.8857 8.16437 15.2526L12 18.6621L15.8356 15.2526C16.2484 14.8857 16.8805 14.9229 17.2474 15.3356C17.6143 15.7484 17.5772 16.3805 17.1644 16.7474L12.6644 20.7474C12.2855 21.0842 11.7145 21.0842 11.3356 20.7474L6.83565 16.7474C6.42286 16.3805 6.38568 15.7484 6.7526 15.3356Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3356 3.25259C11.7145 2.9158 12.2855 2.9158 12.6644 3.25259L17.1644 7.25259C17.5772 7.61951 17.6143 8.25158 17.2474 8.66436C16.8805 9.07715 16.2484 9.11433 15.8356 8.74741L12 5.33795L8.16437 8.74741C7.75159 9.11433 7.11952 9.07715 6.7526 8.66436C6.38568 8.25158 6.42286 7.61951 6.83565 7.25259L11.3356 3.25259Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnfoldMore;
