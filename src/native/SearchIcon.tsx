import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgSearchIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.846 15.613a7.5 7.5 0 1 1 1.768-1.768l5.77 5.771a1.25 1.25 0 0 1-1.768 1.768zM14.5 9.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSearchIcon;
