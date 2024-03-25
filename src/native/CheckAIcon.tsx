import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCheckAIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.884 7.116a1.25 1.25 0 0 1 0 1.768l-10 10a1.25 1.25 0 0 1-1.768 0l-6-6a1.25 1.25 0 0 1 1.768-1.768L10 16.232l9.116-9.116a1.25 1.25 0 0 1 1.768 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCheckAIcon;
