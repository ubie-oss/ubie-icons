import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgWeightScaleIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M9 7h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.507l1.117-1.564a.75.75 0 1 0-1.22-.872L11.65 11H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 5.25C2 4.007 2.895 3 4 3h16c1.105 0 2 1.007 2 2.25v13.5c0 1.243-.895 2.25-2 2.25H4c-1.105 0-2-1.007-2-2.25zm2 0c0-.127.04-.21.07-.25h15.86c.03.04.07.123.07.25v13.5a.42.42 0 0 1-.07.25H4.07a.42.42 0 0 1-.07-.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWeightScaleIcon;
