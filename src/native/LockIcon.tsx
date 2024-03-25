import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgLockIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M12 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 7v2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V7c0-2.469-1.868-5-5-5S7 4.531 7 7m5-3c-1.868 0-3 1.469-3 3v2h6V7c0-1.531-1.132-3-3-3m-6 7v9h12v-9z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLockIcon;
