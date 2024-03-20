import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgEcgHeartFillIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M2 9c0-3.481 2.38-6 5.5-6 1.35 0 2.457.677 3.3 1.45.447.41.847.87 1.2 1.326a10.6 10.6 0 0 1 1.2-1.326C14.042 3.677 15.15 3 16.5 3 19.62 3 22 5.519 22 9c0 2.397-1.606 4.89-3.447 6.922-1.881 2.076-4.213 3.893-6.057 4.946a1 1 0 0 1-.992 0c-1.844-1.053-4.176-2.87-6.057-4.946A19 19 0 0 1 3.73 13.75H6.5a.75.75 0 0 0 .728-.568l.69-2.764 1.347 6.73a.75.75 0 0 0 1.452.073l1.375-4.47.212.527a.75.75 0 0 0 .696.472h4.5a.75.75 0 0 0 0-1.5h-3.992l-.812-2.028a.75.75 0 0 0-1.413.057l-1.129 3.669-1.419-7.095a.75.75 0 0 0-1.463-.035L5.914 12.25h-3.06C2.326 11.181 2 10.08 2 9"
    />
  </Svg>
);
export default SvgEcgHeartFillIcon;
