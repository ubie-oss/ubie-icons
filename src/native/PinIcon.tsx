import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgPinIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 8.296c0 4.59-3.197 10.065-5.13 13.226a.997.997 0 0 1-1.714-.021C6.879 14.05 5.934 9.917 6.003 8.51L6 8.297C6 4.82 8.686 2 12 2s6 2.819 6 6.296m-6 2.734c1.657 0 3-1.347 3-3.01a3.005 3.005 0 0 0-3-3.01c-1.657 0-3 1.348-3 3.01a3.005 3.005 0 0 0 3 3.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPinIcon;
