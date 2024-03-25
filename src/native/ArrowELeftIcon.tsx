import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowELeftIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.384 4.116a1.25 1.25 0 0 1 0 1.768L7.518 10.75H19.5a1.25 1.25 0 1 1 0 2.5H7.518l4.866 4.866a1.25 1.25 0 0 1-1.768 1.768l-7-7a1.25 1.25 0 0 1 0-1.768l7-7a1.25 1.25 0 0 1 1.768 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowELeftIcon;
