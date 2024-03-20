import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgBikeIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 4a1 1 0 1 0 0 2h2.318l.796 2.036-.03.063L12.814 11H8.038l-.467-1H8a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2h1.363l.97 2.077A4.5 4.5 0 1 0 9.889 17.5H11.5a1 1 0 0 0 .916-.6l1.879-4.293a1 1 0 0 0 .19-.436l.659-1.504.826 2.111a4.5 4.5 0 1 0 1.862-.729l-2.9-7.413A1 1 0 0 0 14 4zm.94 9H8.97l1.167 2.5h.709zm4.794 1.73.835 2.134a1 1 0 1 0 1.862-.728l-.835-2.134a2.5 2.5 0 1 1-1.862.729m-8.942.77H5.5a1 1 0 1 0 0 2h2.292a2.5 2.5 0 1 1 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBikeIcon;
