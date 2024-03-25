import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgLaptopIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9h1a1 1 0 0 1 1 1 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2 1 1 0 0 1 1-1h1zm16 9H5V7h14z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLaptopIcon;
