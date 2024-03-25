import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgSendIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.927 3.42a1 1 0 0 0-1.293-1.332l-18 7.374a1 1 0 0 0-.029 1.838l6.63 2.96 2.85 7.124a1 1 0 0 0 1.842.035zm-12.134 8.9-4.239-1.893 10.985-4.5-6.714 6.36zm1.393 1.433 1.875 4.689 4.964-11.168-6.824 6.465z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSendIcon;
