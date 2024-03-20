import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgAddressIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M10.674 2.503a2 2 0 0 1 2.652 0l7.997 7.08c1.379 1.22.516 3.417-1.325 3.417H19v1a5 5 0 0 0-2-.9V11h2.998L12 4l-7.998 7H7v9h4.416a5 5 0 0 0 1.583 2H7a2 2 0 0 1-2-2v-7h-.998c-1.84 0-2.704-2.196-1.326-3.417z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.5 16.702V16.7C18.5 15.209 17.38 14 16 14s-2.5 1.21-2.5 2.7q0 .048.002.094c-.027.544.292 2.044 1.668 4.686a.964.964 0 0 0 1.696.023c.76-1.363 1.634-3.207 1.634-4.801m-1.25-.34c0 .652-.56 1.181-1.25 1.181s-1.25-.529-1.25-1.18c0-.653.56-1.182 1.25-1.182s1.25.529 1.25 1.181"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAddressIcon;
