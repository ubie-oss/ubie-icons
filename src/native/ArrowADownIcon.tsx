import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowADownIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M11.203 21.585a.993.993 0 0 0 1.616-.002l4.995-7.015A.992.992 0 0 0 17.006 13H15V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v10H6.994a.992.992 0 0 0-.807 1.57z"
    />
  </Svg>
);
export default SvgArrowADownIcon;
