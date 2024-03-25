import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgTriangleUpIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M11.125 4.499 3.121 18.604C2.762 19.235 3.245 20 4 20h15.997c.757 0 1.24-.764.882-1.396L12.888 4.5c-.378-.665-1.385-.666-1.763 0"
    />
  </Svg>
);
export default SvgTriangleUpIcon;
