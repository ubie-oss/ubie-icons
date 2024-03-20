import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgHideFillIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.72 2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.6 2.6c-1.7 1.4-3.1 3.2-3.8 5.4q-.15.3 0 .6c1.6 4.5 5.9 7.7 10.9 7.7 1.9 0 3.7-.5 5.3-1.3l3 3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zm8.3 14.7c-2.8 0-5-2.2-5-5 0-1 .3-2 .8-2.7l1.5 1.5q-.3.45-.3 1.2c0 1.7 1.3 3 3 3 .5 0 .9-.1 1.3-.3l1.5 1.5c-.8.5-1.8.8-2.8.8"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M22.92 11.7c-1.5-4.5-5.8-7.8-10.9-7.8-1.4 0-2.7.3-4 .7l2.6 2.6.213-.044c.406-.083.76-.156 1.187-.156 2.8 0 5 2.2 5 5 0 .427-.073.781-.157 1.187l-.043.213 3.4 3.4c1.2-1.2 2.2-2.7 2.8-4.4 0-.3 0-.5-.1-.7"
    />
    <Path fill="currentColor" d="m12.52 9 2.5 2.5c-.2-1.2-1.3-2.3-2.5-2.5" />
  </Svg>
);
export default SvgHideFillIcon;
