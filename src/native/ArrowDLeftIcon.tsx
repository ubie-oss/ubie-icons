import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowDLeftIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M6.366 11.254a.946.946 0 0 0 0 1.496l9.818 7.996c.703.573 1.816.115 1.816-.748V4.003c0-.863-1.113-1.322-1.817-.748z"
    />
  </Svg>
);
export default SvgArrowDLeftIcon;
