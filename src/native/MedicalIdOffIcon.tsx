import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicalIdOffIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.707 2.293a1 1 0 0 0-1.414 1.414l1.329 1.329A2 2 0 0 0 2 7v10a2 2 0 0 0 2 2h13.586l2.707 2.707a1 1 0 0 0 1.414-1.414zM15.586 17l-2.65-2.65A1 1 0 0 1 12 15H6a1 1 0 1 1 0-2h5.586l-6-6H4v10z"
      clipRule="evenodd"
    />
    <Path fill="currentColor" d="M20 16.586V7h-9.586l-2-2H20a2 2 0 0 1 2 2v10c0 .447-.146.86-.394 1.192z" />
    <Path fill="currentColor" d="M17.5 11.5V13h-2v-1.5H14v-2h1.5V8h2v1.5H19v2z" />
  </Svg>
);
export default SvgMedicalIdOffIcon;
