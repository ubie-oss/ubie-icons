import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgLogoutIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M4 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h-2v3H5V4h9v3h2V3a1 1 0 0 0-1-1z"
    />
    <Path
      fill="currentColor"
      d="m17.865 13-1.133 1.36a1 1 0 1 0 1.536 1.28l2.5-3a1 1 0 0 0 0-1.28l-2.5-3a1 1 0 1 0-1.536 1.28L17.865 11H9a1 1 0 1 0 0 2z"
    />
  </Svg>
);
export default SvgLogoutIcon;
