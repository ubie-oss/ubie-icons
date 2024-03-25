import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgPersonRemoveIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M10.29 19c-1.903 0-3.342-.003-4.444-.03a22 22 0 0 1-1.838-.102c.042-.348.26-.93 1.043-1.5.83-.603 2.359-1.228 5.017-1.348a7 7 0 0 1 .605-2.018C3.937 14.094 2 17.032 2 19c0 .537 0 .93.174 1.217C2.648 21 4.416 21 11 21h.255a7 7 0 0 1-.965-2m-6.28.492.002.007z"
      clipRule="evenodd"
    />
    <Path fill="currentColor" d="M14 16a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z" />
  </Svg>
);
export default SvgPersonRemoveIcon;
