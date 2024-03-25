import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgUnlockIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M12 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.92 4.68c-.446.401-.749.97-.971 1.636a1 1 0 1 1-1.897-.632c.277-.833.724-1.765 1.53-2.49C9.41 2.45 10.531 2 12 2c3.133 0 5 2.531 5 5v2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9V7c0-1.531-1.132-3-3-3-1.03 0-1.66.301-2.08.68M18 11H6v9h12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUnlockIcon;
