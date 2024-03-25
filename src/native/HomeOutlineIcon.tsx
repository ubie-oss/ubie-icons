import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgHomeOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.674 2.503a2 2 0 0 1 2.652 0l7.997 7.08C22.702 10.803 21.841 13 20 13h-1v7a2 2 0 0 1-2 2h-4v-7h-2v7H7a2 2 0 0 1-2-2v-7h-.998c-1.84 0-2.704-2.196-1.326-3.417zM17 20h-2v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6H7v-9H4.002L12 4l8 7h-3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHomeOutlineIcon;
