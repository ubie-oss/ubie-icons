import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgDownloadIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M11 13V4a1 1 0 1 1 2 0v9l2.4-1.8a1 1 0 1 1 1.2 1.6l-4 3a1 1 0 0 1-1.2 0l-4-3a1 1 0 0 1 1.2-1.6z"
    />
    <Path
      fill="currentColor"
      d="M21 11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v7h16v-7a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgDownloadIcon;
