import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgThumbDownFillIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="m15.952 15.928.778-.83a1 1 0 0 0 .27-.684V4a1 1 0 0 0-1-1H7.333c-1.375 0-2.342.52-3.011 1.347-.586.724-.906 1.648-1.159 2.378l-.025.071-.001.006c-.284.819-.564 1.81-.774 2.734C2.158 10.438 2 11.359 2 12c0 .86.436 1.626.984 2.153.55.529 1.33.93 2.183.93h3.471l-.117.309c-.35.93-.773 2.065-1.05 2.86-.37 1.071-.181 2.214.405 2.962.298.38.754.72 1.343.777.613.06 1.163-.202 1.582-.624.528-.533 2.018-2.107 3.36-3.534.675-.716 1.317-1.4 1.79-1.905M22 14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z"
    />
  </Svg>
);
export default SvgThumbDownFillIcon;
