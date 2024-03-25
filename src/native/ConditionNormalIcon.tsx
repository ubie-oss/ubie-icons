import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgConditionNormalIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M9.25 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M16 10.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M10 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgConditionNormalIcon;
