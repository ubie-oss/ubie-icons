import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgImageIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM20 5H4v8.865l3.72-3.1a2 2 0 0 1 2.56 0l4.659 3.882L16.586 13a2 2 0 0 1 2.828 0l.586.586zm0 14v-2.586l-2-2-1.647 1.647a2 2 0 0 1-2.695.123L9 12.302l-5 4.166V19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgImageIcon;
