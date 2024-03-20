import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgPlusAIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75c.69 0 1.25.56 1.25 1.25v6.75H20a1.25 1.25 0 1 1 0 2.5h-6.75V20a1.25 1.25 0 1 1-2.5 0v-6.75H4a1.25 1.25 0 1 1 0-2.5h6.75V4c0-.69.56-1.25 1.25-1.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlusAIcon;
