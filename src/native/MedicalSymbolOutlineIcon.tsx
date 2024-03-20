import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicalSymbolOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4.5H20a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4.5V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4.5H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4.5zm5 0h-3v5.5a1 1 0 0 1-1 1H4v3h5.5a1 1 0 0 1 1 1V20h3v-5.5a1 1 0 0 1 1-1H20v-3h-5.5a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedicalSymbolOutlineIcon;
