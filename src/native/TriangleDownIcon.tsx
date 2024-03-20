import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgTriangleDownIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M11.125 19.501 3.121 5.396C2.762 4.765 3.245 4 4 4h15.997c.757 0 1.24.764.882 1.396L12.888 19.5c-.378.665-1.385.665-1.763 0"
    />
  </Svg>
);
export default SvgTriangleDownIcon;
