import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgShareBIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 9a3.5 3.5 0 1 0-3.426-2.781L8.473 9.523a3.5 3.5 0 1 0 0 4.954l6.1 3.304a3.5 3.5 0 1 0 .953-1.758l-6.1-3.304a3.5 3.5 0 0 0 0-1.438l6.101-3.304A3.5 3.5 0 0 0 18 9"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShareBIcon;
