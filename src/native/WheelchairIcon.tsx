import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgWheelchairIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h7a1 1 0 0 1 .973.771l1.972 8.381A3 3 0 0 1 20.83 18H22a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 1 1-3.926-3.793L16.384 14H13.66A6 6 0 1 1 7 10.083V9H6a1 1 0 0 1 0-2h1V4H4a1 1 0 0 1-1-1m8.187 10.583.026.034a4 4 0 1 1-.026-.035M12.472 12h3.442l-.706-3H9v1.083A6 6 0 0 1 12.472 12M18 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWheelchairIcon;
