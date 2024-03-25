import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgBookmarkFillIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M8 2a3 3 0 0 0-3 3v17a1 1 0 0 0 1.485.875L12 19.818l5.515 3.057A1 1 0 0 0 19 22V5a3 3 0 0 0-3-3z"
    />
  </Svg>
);
export default SvgBookmarkFillIcon;
