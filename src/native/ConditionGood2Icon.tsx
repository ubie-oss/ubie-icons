import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgConditionGood2Icon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M16 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M8.949 13.684a1 1 0 0 0-1.897.632c.348 1.045 1.15 1.838 2.026 2.357.88.521 1.929.827 2.922.827s2.043-.306 2.923-.827c.875-.52 1.678-1.312 2.026-2.357a1 1 0 0 0-1.897-.632c-.152.456-.55.913-1.15 1.269-.595.353-1.295.547-1.902.547s-1.307-.194-1.902-.547c-.6-.356-.997-.813-1.15-1.27"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgConditionGood2Icon;
