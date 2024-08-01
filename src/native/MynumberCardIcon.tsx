import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMynumberCardIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M5.75 8a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM11.5 12.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M12.25 14.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM16.5 8H19v2.5h-2.5z"
    />
    <Path fill="currentColor" fillRule="evenodd" d="M5 16v-5h5v5zm1.5-3.5h2v2h-2z" clipRule="evenodd" />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v10H4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMynumberCardIcon;
