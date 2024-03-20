import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgInsuranceCardIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M6 14.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM5.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M16 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm16 2H4v1.25h16zM4 17V9.75h16V17z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgInsuranceCardIcon;
