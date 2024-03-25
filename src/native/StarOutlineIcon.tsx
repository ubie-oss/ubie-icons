import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgStarOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2a1 1 0 0 1 .923.614l2.527 6.043 6.086.219a1 1 0 0 1 .647 1.73l-4.643 4.342 1.307 5.833a1 1 0 0 1-1.501 1.07L12 18.548 6.654 21.85a1 1 0 0 1-1.501-1.07l1.307-5.833-4.643-4.342a1 1 0 0 1 .647-1.73l6.086-.219 2.528-6.043A1 1 0 0 1 12 2m0 3.591-1.852 4.428a1 1 0 0 1-.887.614l-4.321.155 3.304 3.09a1 1 0 0 1 .292.95L7.624 18.9l3.85-2.38a1 1 0 0 1 1.052 0l3.85 2.38-.912-4.074a1 1 0 0 1 .292-.949l3.304-3.09-4.321-.155a1 1 0 0 1-.887-.614z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStarOutlineIcon;
