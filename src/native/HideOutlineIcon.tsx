import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgHideOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.707 2.293a1 1 0 0 0-1.414 1.414l2.62 2.62A11.8 11.8 0 0 0 1.1 11.7q-.15.3 0 .6C2.7 16.8 7 20 12 20c1.94 0 3.7-.482 5.28-1.306l3.013 3.013a1 1 0 0 0 1.414-1.414zm12.135 14.963-1.098-1.098A4.93 4.93 0 0 1 12 17c-2.8 0-5-2.2-5-5 0-.998.31-1.952.842-2.744L6.374 7.788A9.9 9.9 0 0 0 3.1 12c1.4 3.6 4.8 6.1 8.9 6.1a9.3 9.3 0 0 0 3.842-.844m-2.56-2.559-3.98-3.98C9.113 11.1 9 11.527 9 12c0 1.7 1.3 3 3 3 .472 0 .9-.112 1.283-.303"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M12.5 9c1.3.2 2.3 1.2 2.5 2.5l1.8 1.8c.1-.4.2-.9.2-1.4 0-2.8-2.2-5-5-5-.427 0-.781.073-1.187.156q-.104.023-.213.044z"
    />
    <Path
      fill="currentColor"
      d="M22.9 11.7C21.4 7.2 17.1 3.9 12 3.9c-1.4 0-2.7.3-4 .7l1.6 1.6q1.2-.3 2.4-.3c4.1 0 7.5 2.5 8.9 6.1-.5 1.3-1.2 2.4-2.2 3.3l1.4 1.4c1.2-1.2 2.2-2.7 2.8-4.4q.15-.3 0-.6"
    />
  </Svg>
);
export default SvgHideOutlineIcon;
