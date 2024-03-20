import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicalFormIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M8 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 13a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M11 17a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M12 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 3.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2h1a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2zm.268 2H5V20h14V5.5h-1.268A2 2 0 0 1 16 6.5H8a2 2 0 0 1-1.732-1M16 3.5H8v1h8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedicalFormIcon;
