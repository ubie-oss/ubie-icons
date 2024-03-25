import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicalSymbolFillIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M14.5 4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5.5H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5.5V20a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5.5H20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5.5z"
    />
  </Svg>
);
export default SvgMedicalSymbolFillIcon;
