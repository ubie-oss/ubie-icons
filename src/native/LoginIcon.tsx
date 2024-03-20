import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgLoginIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M9 2a1 1 0 0 0-1 1v6h2V4h9v16h-9v-5H8v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
    />
    <Path
      fill="currentColor"
      d="m13.865 13-1.133 1.36a1 1 0 1 0 1.536 1.28l2.5-3a1 1 0 0 0 0-1.28l-2.5-3a1 1 0 1 0-1.536 1.28L13.865 11H4a1 1 0 1 0 0 2z"
    />
  </Svg>
);
export default SvgLoginIcon;
