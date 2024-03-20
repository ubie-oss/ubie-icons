import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgEditIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M4 2h7v2H4v16h15v-7h2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2" />
    <Path
      fill="currentColor"
      d="M20.307 2.307a1 1 0 0 0-1.414 0l-7.634 7.634c-.095.095-.17.209-.22.333l-.796 1.97a1 1 0 0 0 1.185 1.34l2.256-.601a1 1 0 0 0 .45-.26l7.587-7.587a1 1 0 0 0 0-1.415z"
    />
  </Svg>
);
export default SvgEditIcon;
