import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgBookmarkOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 4a1 1 0 0 0-1 1v15.303l4.515-2.503a1 1 0 0 1 .97 0L17 20.303V5a1 1 0 0 0-1-1zM5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v17a1 1 0 0 1-1.485.875L12 19.818l-5.515 3.057A1 1 0 0 1 5 22z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBookmarkOutlineIcon;
