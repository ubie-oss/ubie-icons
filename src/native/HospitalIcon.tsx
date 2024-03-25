import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgHospitalIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M13 10.5V9h1.5V7H13V5.5h-2V7H9.5v2H11v1.5z" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 22a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.5V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zM4 9h3.5V4h9v5H20v11h-4v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H4zm6 11h4v-5h-4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHospitalIcon;
