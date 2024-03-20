import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMapIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.345 2.245a1 1 0 0 1 .796-.235l6.847.978 5.848-.974a1 1 0 0 1 .263-.009l5 .5A1 1 0 0 1 22 3.5V21a1 1 0 0 1-1.196.98l-4.82-.963-5.82.97a1 1 0 0 1-.305.003l-7-1A1 1 0 0 1 2 20V3a1 1 0 0 1 .345-.755M15 4.18l-4.836.806A1 1 0 0 1 10 5v14.986l5-.833zm2-.075V19.18l3 .6V4.405zM4 4.153l4.037.577A1 1 0 0 0 8 5v14.704l-4-.571z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMapIcon;
