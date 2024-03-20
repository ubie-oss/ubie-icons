import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMenuIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zM8 11a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zM7 16a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </Svg>
);
export default SvgMenuIcon;
