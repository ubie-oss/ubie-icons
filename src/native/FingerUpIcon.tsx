import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFingerUpIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 4a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1c-.393 0-.628.083-.75.18-.08.065-.25.24-.25.82 0 .117.044.342.195.69.146.334.363.719.635 1.134.543.83 1.258 1.71 1.916 2.447a1 1 0 0 1 .254.666V20h6v-1a1 1 0 0 1 .2-.6c.654-.872 1.11-1.948 1.4-2.973.293-1.028.4-1.935.4-2.427 0-.298-.218-.781-.882-1.24-.637-.441-1.561-.76-2.618-.76H11a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1M6 5a3 3 0 0 1 6 0v4h1.5c1.443 0 2.769.431 3.757 1.115C18.218 10.781 19 11.798 19 13c0 .709-.143 1.801-.476 2.973-.306 1.08-.79 2.285-1.524 3.349V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-.685c-.627-.721-1.3-1.565-1.844-2.396a10 10 0 0 1-.794-1.431C4.162 15.029 4 14.512 4 14c0-1.02.33-1.845 1-2.38.312-.25.657-.404 1-.497z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFingerUpIcon;
