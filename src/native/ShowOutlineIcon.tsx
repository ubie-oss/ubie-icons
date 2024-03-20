import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgShowOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4.005c-5.045 0-9.343 3.194-10.937 7.66a1 1 0 0 0 0 .67C2.657 16.8 6.955 19.995 12 19.995c5.046 0 9.343-3.194 10.937-7.66a1 1 0 0 0 0-.67C21.343 7.2 17.045 4.005 12 4.005m0 14A9.61 9.61 0 0 1 3.064 12 9.61 9.61 0 0 1 12 5.995 9.61 9.61 0 0 1 20.936 12 9.61 9.61 0 0 1 12 18.005"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShowOutlineIcon;
