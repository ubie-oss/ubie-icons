import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgArrowBRightIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.884 12.884a1.25 1.25 0 0 0 0-1.768l-8-8a1.25 1.25 0 1 0-1.768 1.768L14.232 12l-7.116 7.116a1.25 1.25 0 0 0 1.768 1.768z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowBRightIcon;
