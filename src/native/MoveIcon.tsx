import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMoveIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M21.924 7.383a1 1 0 0 1-.218.325l-3.999 4a1 1 0 0 1-1.414-1.415L18.586 8H8.504c-.713.076-1.833.448-2.77 1.338C4.808 10.218 4 11.658 4 14v7a1 1 0 1 1-2 0v-7c0-2.858 1.01-4.834 2.357-6.113 1.317-1.25 2.899-1.781 4.006-1.883A1 1 0 0 1 8.455 6h10.13l-2.292-2.293a1 1 0 0 1 1.414-1.414l3.999 3.999.012.012a1 1 0 0 1 .206 1.079"
    />
  </Svg>
);
export default SvgMoveIcon;
