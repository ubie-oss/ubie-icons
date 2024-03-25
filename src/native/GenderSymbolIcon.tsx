import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgGenderSymbolIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.266 6.218c-.37.41-.37 1.076 0 1.486a.88.88 0 0 0 1.338 0l1.95-2.167V13q0 .05.004.099A4.502 4.502 0 0 0 17.5 22a4.5 4.5 0 0 0 .942-8.901q.004-.05.004-.1V5.539l1.95 2.166a.88.88 0 0 0 1.338 0c.37-.41.37-1.076 0-1.486l-3.563-3.96-.008-.008a.88.88 0 0 0-1.332.007zM20 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M11 6.5a4.5 4.5 0 0 1-3.506 4.39q.006.054.006.11v5h2a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0v-3h-2a1 1 0 1 1 0-2h2v-5q0-.056.006-.11A4.502 4.502 0 0 1 6.5 2 4.5 4.5 0 0 1 11 6.5m-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgGenderSymbolIcon;
