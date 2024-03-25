import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgBeginnerIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.555 2.168A1 1 0 0 0 5 3v14a1 1 0 0 0 .445.832l6 4a1 1 0 0 0 1.11 0l6-4A1 1 0 0 0 19 17V3a1 1 0 0 0-1.555-.832L12 5.798zM7 16.465V4.869l5 3.333v11.596z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBeginnerIcon;
