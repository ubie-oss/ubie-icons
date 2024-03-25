import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgQrCodeReaderIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 3a1 1 0 0 1 1-1h3.5a.75.75 0 0 1 0 1.5h-3v3a.75.75 0 0 1-1.5 0zM21 2a1 1 0 0 1 1 1v3.5a.75.75 0 0 1-1.5 0v-3h-3a.75.75 0 0 1 0-1.5zM3 22a1 1 0 0 1-1-1v-3.5a.75.75 0 0 1 1.5 0v3h3a.75.75 0 0 1 0 1.5zM22 21a1 1 0 0 1-1 1h-3.5a.75.75 0 0 1 0-1.5h3v-3a.75.75 0 0 1 1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.5 6.5h-3v3h3zM5 5v6h6V5zM17.5 6.5h-3v3h3zM13 5v6h6V5zM9.5 14.5h-3v3h3zM5 13v6h6v-6z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M13 13h1.5v1.5H13zM16 13h1.5v1.5H16zM13 14.5h1.5V16H13zM14.5 14.5H16V16h-1.5zM17.5 14.5H19V16h-1.5zM16 16h1.5v1.5H16zM13 17.5h1.5V19H13zM16 17.5h1.5V19H16zM17.5 17.5H19V19h-1.5z"
    />
  </Svg>
);
export default SvgQrCodeReaderIcon;
