import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgTrashEmptyIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 6V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2zm-2-2H9v2h6zm2 4H7v12h10z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTrashEmptyIcon;
