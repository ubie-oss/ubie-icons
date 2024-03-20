import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgShareIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.6 2.2a1 1 0 0 0-1.2 0l-4 3a1 1 0 1 0 1.2 1.6L11 5v10a1 1 0 1 0 2 0V5l2.4 1.8a1 1 0 0 0 1.2-1.6zM15 12h4v8H5v-8h4v-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShareIcon;
