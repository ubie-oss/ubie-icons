import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgInjectionIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.475 2.646a1 1 0 0 1 1.415 0l4.242 4.243a1 1 0 0 1-1.414 1.414l-.354-.353-2.237 2.237 2.298 2.298a1 1 0 1 1-1.414 1.415l-.707-.707-6.789 6.789a2 2 0 0 1-2.258.399l-2.11-.982-1.925 1.925a1 1 0 1 1-1.414-1.414l1.925-1.925-.981-2.11a2 2 0 0 1 .399-2.257l6.789-6.79-.707-.707a1 1 0 1 1 1.414-1.414l1.944 1.944 2.238-2.237-.354-.353a1 1 0 0 1 0-1.415m2.475 3.89-.707-.707L15.15 7.92l.707.707zm-2.06 5.242-3.536-3.535-1.59 1.59 1.767 1.768a.75.75 0 1 1-1.06 1.061l-1.768-1.767-1.061 1.06 1.768 1.768a.75.75 0 1 1-1.061 1.06l-1.768-1.767-2.016 2.016 1.123 2.413L9.1 18.567z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgInjectionIcon;
