import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgUnfoldMoreIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.116 3.116a1.25 1.25 0 0 1 1.768 0l4 4a1.25 1.25 0 0 1-1.768 1.768L12 5.768 8.884 8.884a1.25 1.25 0 1 1-1.768-1.768zM7.116 15.116a1.25 1.25 0 0 1 1.768 0L12 18.232l3.116-3.116a1.25 1.25 0 0 1 1.768 1.768l-4 4a1.25 1.25 0 0 1-1.768 0l-4-4a1.25 1.25 0 0 1 0-1.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUnfoldMoreIcon;
