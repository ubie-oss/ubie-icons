import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgShowFillIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.057 11.667C2.65 7.16 6.947 3.93 12 3.93c5.054 0 9.35 3.23 10.943 7.736a1 1 0 0 1 0 .666C21.35 16.84 17.053 20.07 12 20.07c-5.054 0-9.35-3.23-10.943-7.736a1 1 0 0 1 0-.666M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShowFillIcon;
