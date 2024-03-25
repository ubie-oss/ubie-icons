import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgPrinterIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 9H4v6h2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2zm-1 3v-2h-2v2zm-3 3H8v5h8zM8 7h8V4H8zM6 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPrinterIcon;
