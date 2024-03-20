import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgPostalCodeIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M4 4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-7v9a1 1 0 1 1-2 0v-9H4a1 1 0 0 1-1-1"
    />
  </Svg>
);
export default SvgPostalCodeIcon;
