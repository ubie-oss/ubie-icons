import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMaleSymbolIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="m17.586 5-6.11 6.11a6 6 0 1 0 1.414 1.414L19 6.414V10a1 1 0 1 0 2 0V4.001l-.001-.049A.996.996 0 0 0 20 3h-6a1 1 0 1 0 0 2zM8 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMaleSymbolIcon;
