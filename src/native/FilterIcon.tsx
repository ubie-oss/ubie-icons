import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFilterIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.83 7a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h1.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2zM9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 11h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2m-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12.83 17H20a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h3.17a3.001 3.001 0 0 1 5.66 0M11 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFilterIcon;
