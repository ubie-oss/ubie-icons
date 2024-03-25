import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgShrinkIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M14.293 9.707A1 1 0 0 1 14 9V4a1 1 0 1 1 2 0v2.586l4.293-4.293a1 1 0 1 1 1.414 1.414L17.414 8H20a1 1 0 1 1 0 2h-5a1 1 0 0 1-.707-.293M9.707 14.293A1 1 0 0 1 10 15v5a1 1 0 1 1-2 0v-2.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L6.586 16H4a1 1 0 1 1 0-2h5a1 1 0 0 1 .707.293"
    />
  </Svg>
);
export default SvgShrinkIcon;
