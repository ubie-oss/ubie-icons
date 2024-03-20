import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFirstAidBoxIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M13 16.5V18h-2v-1.5H9.5v-2H11V13h2v1.5h1.5v2z" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 4v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2m8 0H9v2h6zm5 6V8H4v2zM4 12h16v7H4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFirstAidBoxIcon;
