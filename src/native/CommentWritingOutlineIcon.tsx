import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCommentWritingOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 17a2 2 0 0 0 2 2h2v2c0 1.5 1.5 2 2.5 1l3-3H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm6 2.672V17H4V5h16v12h-9.328z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCommentWritingOutlineIcon;
