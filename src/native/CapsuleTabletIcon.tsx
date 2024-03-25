import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCapsuleTabletIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M11.631 10.53a7 7 0 0 0-1.369 1.46L7.465 9.192l-2.122 2.122a4 4 0 0 0 3.943 6.67c.193.656.48 1.271.844 1.831A6 6 0 0 1 3.93 9.9l5.657-5.657a6 6 0 0 1 10.046 5.771 7 7 0 0 0-1.872-.79A4 4 0 0 0 11 5.657L8.88 7.777z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 16a6 6 0 1 0-12 0 6 6 0 0 0 12 0m-10 0a4 4 0 0 1 3-3.874v7.748A4 4 0 0 1 12 16m5 3.874a4.002 4.002 0 0 0 0-7.748z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCapsuleTabletIcon;
