import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowEDownIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.116 11.616a1.25 1.25 0 0 1 1.768 0l4.866 4.866V4.5a1.25 1.25 0 1 1 2.5 0v11.982l4.866-4.866a1.25 1.25 0 0 1 1.768 1.768l-7 7a1.25 1.25 0 0 1-1.768 0l-7-7a1.25 1.25 0 0 1 0-1.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowEDownIcon;
