import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicalIdIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M6 13a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM17.5 11.5V13h-2v-1.5H14v-2h1.5V8h2v1.5H19v2z" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v10H4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedicalIdIcon;
