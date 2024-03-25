import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCapsuleIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.414 19.071a6 6 0 0 1-8.485-8.485l5.657-5.657a6 6 0 1 1 8.485 8.486zm1.414-4.242L9.171 9.172 6.343 12A4 4 0 0 0 12 17.657z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCapsuleIcon;
