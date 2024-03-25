import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgHelpIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M9.658 9.204c-.494 0-.858-.429-.858-1.001 0-.234.052-.611.975-1.092.936-.481 1.573-.611 2.275-.611 2.223 0 3.458 1.456 3.458 3.042 0 1.338-.778 2-1.48 2.598l-.002.002c-.808.693-.844.841-.982 1.406l-.006.024c-.065.286-.156.663-1.027.663-.95 0-1.027-.52-1.027-.884 0-1.144.845-1.82 1.157-2.067 1.027-.832 1.313-1.066 1.313-1.677 0-.741-.637-1.222-1.534-1.222-.468 0-1.053.13-1.547.494-.286.221-.43.325-.715.325M10.737 16.107c0-.689.559-1.248 1.26-1.248.677 0 1.249.546 1.249 1.248a1.254 1.254 0 1 1-2.509 0"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHelpIcon;
