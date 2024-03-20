import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgGenderHumanIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.5 11A2.5 2.5 0 0 1 6 8.5h2a2.5 2.5 0 0 1 2.5 2.5v5a.5.5 0 0 1-.5.5H8.5V21a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-4.5H4a.5.5 0 0 1-.5-.5zM14.078 10.844a2.993 2.993 0 0 1 5.844 0l1.566 7.048A.5.5 0 0 1 21 18.5h-2.5V21a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.5H13a.5.5 0 0 1-.488-.608z"
    />
  </Svg>
);
export default SvgGenderHumanIcon;
