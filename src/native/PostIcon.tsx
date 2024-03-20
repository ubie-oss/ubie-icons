import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgPostIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M4 20V4h15v7h2V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8v-2z" />
    <Path
      fill="currentColor"
      d="M7 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zM7 10a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM17 12a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgPostIcon;
