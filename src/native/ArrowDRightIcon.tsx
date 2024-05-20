import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowDRightIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M17.634 12.747a.946.946 0 0 0 0-1.496L7.816 3.255C7.112 2.68 6 3.139 6 4.003v15.995c0 .863 1.113 1.321 1.817.747z"
    />
  </Svg>
);
export default SvgArrowDRightIcon;
