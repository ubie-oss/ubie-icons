import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowAUpIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M12.797 2.415a.993.993 0 0 0-1.616.002L6.186 9.432A.992.992 0 0 0 6.994 11H9v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11h2.006a.992.992 0 0 0 .807-1.57z"
    />
  </Svg>
);
export default SvgArrowAUpIcon;
