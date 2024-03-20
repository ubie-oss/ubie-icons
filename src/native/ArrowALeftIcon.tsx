import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowALeftIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M2.415 12.797a.993.993 0 0 1 .002-1.616l7.015-4.995A.992.992 0 0 1 11 6.994V9h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H11v2.006a.992.992 0 0 1-1.57.807z"
    />
  </Svg>
);
export default SvgArrowALeftIcon;
