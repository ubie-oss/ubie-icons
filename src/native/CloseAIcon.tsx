import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCloseAIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.116 3.116a1.25 1.25 0 0 1 1.768 0L12 10.232l7.116-7.116a1.25 1.25 0 0 1 1.768 1.768L13.768 12l7.116 7.116a1.25 1.25 0 0 1-1.768 1.768L12 13.768l-7.116 7.116a1.25 1.25 0 0 1-1.768-1.768L10.232 12 3.116 4.884a1.25 1.25 0 0 1 0-1.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCloseAIcon;
