import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowARightIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M21.585 11.203a.993.993 0 0 1-.002 1.616l-7.015 4.995A.992.992 0 0 1 13 17.006V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h10V6.994a.992.992 0 0 1 1.57-.807z"
    />
  </Svg>
);
export default SvgArrowARightIcon;
