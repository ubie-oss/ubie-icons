import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgAlertIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M13 13a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0zM12 18a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2a1 1 0 0 1 .862.493l10 17A1 1 0 0 1 22 21H2a1 1 0 0 1-.862-1.507l10-17A1 1 0 0 1 12 2m8.252 17L12 4.972 3.748 19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAlertIcon;
