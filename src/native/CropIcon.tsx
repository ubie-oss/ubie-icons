import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCropIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H4v4a1 1 0 0 1-2 0zM22 3a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0zM2.293 21.707A1 1 0 0 1 2 21v-5a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2H3a1 1 0 0 1-.707-.293M22 21a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0z"
    />
  </Svg>
);
export default SvgCropIcon;
