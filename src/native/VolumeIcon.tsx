import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgVolumeIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="m5 9.01 5.268-5.654c.62-.664 1.732-.226 1.732.682v15.995c0 .91-1.116 1.346-1.734.679L5 15.02H3a1 1 0 0 1-1-1v-4.01a1 1 0 0 1 1-1zm.87 2H4v2.01h1.874L10 17.48V6.577z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M14.242 6.348a1 1 0 0 1 1.41-.106c1.634 1.406 2.401 3.594 2.406 5.706.005 2.115-.751 4.327-2.39 5.797a1 1 0 1 1-1.335-1.49c1.123-1.007 1.73-2.622 1.725-4.302-.004-1.682-.619-3.256-1.71-4.195a1 1 0 0 1-.106-1.41"
    />
    <Path
      fill="currentColor"
      d="M18.609 4.203a1.005 1.005 0 0 0-1.405.193 1 1 0 0 0 .193 1.401c1.667 1.259 2.592 3.543 2.597 6.018.005 2.466-.91 4.914-2.651 6.432a1 1 0 0 0-.095 1.412c.365.415.999.457 1.415.094 2.272-1.982 3.342-5.034 3.337-7.942-.006-2.901-1.086-5.867-3.391-7.608"
    />
  </Svg>
);
export default SvgVolumeIcon;
