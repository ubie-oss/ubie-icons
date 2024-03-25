import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgConditionBad2Icon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M14.184 11.949a1 1 0 0 1 .632-1.898l1.5.5a1 1 0 0 1-.632 1.898zM10.449 10.684a1 1 0 0 1-.633 1.265l-1.5.5a1 1 0 1 1-.632-1.898l1.5-.5a1 1 0 0 1 1.265.633M9.872 17.429C10.3 17.257 11.17 17 12 17s1.7.257 2.129.428a1 1 0 1 0 .743-1.857C14.3 15.344 13.17 15 12 15s-2.3.343-2.871.572a1 1 0 0 0 .743 1.857"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgConditionBad2Icon;
