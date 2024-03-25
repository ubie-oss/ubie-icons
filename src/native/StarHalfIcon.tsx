import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgStarHalfIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.923 2.614a1 1 0 0 0-1.845 0L8.55 8.657l-6.086.219a1 1 0 0 0-.647 1.73l4.643 4.342-1.307 5.833a1 1 0 0 0 1.501 1.07L12 18.548l5.346 3.303a1 1 0 0 0 1.501-1.07l-1.307-5.833 4.643-4.342a1 1 0 0 0-.647-1.73l-6.086-.219zM12 5.591l1.852 4.428a1 1 0 0 0 .887.614l4.321.155-3.304 3.09a1 1 0 0 0-.292.95l.912 4.073-3.85-2.38a1 1 0 0 0-.526-.149z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStarHalfIcon;
