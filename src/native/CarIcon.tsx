import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCarIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M7.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.7 4a1 1 0 0 0-.912.59l-2.7 6A1 1 0 0 0 2 11v7q0 .116.025.224Q2 18.36 2 18.5v2a1.5 1.5 0 0 0 3 0V19h14v1.5a1.5 1.5 0 0 0 3 0v-2q0-.141-.025-.276A1 1 0 0 0 22 18v-7a1 1 0 0 0-.088-.41l-2.7-6A1 1 0 0 0 18.3 4zm-1.153 6 1.8-4h11.306l1.8 4zM4 12v5h16v-5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCarIcon;
