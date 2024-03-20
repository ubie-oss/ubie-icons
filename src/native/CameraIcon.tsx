import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCameraIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="m7.332 8 1.8-3h5.736l1.8 3H20v11H4V8zm1.234-5a1 1 0 0 0-.857.486L6.2 6H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3.2l-1.509-2.514A1 1 0 0 0 15.434 3zM15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCameraIcon;
