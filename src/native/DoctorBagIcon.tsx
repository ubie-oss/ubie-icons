import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgDoctorBagIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M12.75 14.25v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5h1.5v1.5z" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 6V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm2-1h6v1H9zM4 8v1.25h16V8zm0 8.25v-5.5h16v5.5zm0 1.5V19h16v-1.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDoctorBagIcon;
