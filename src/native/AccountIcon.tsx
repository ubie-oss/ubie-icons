import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgAccountIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M21 19c0 .537 0 .93-.174 1.217C20.352 21 18.584 21 12 21s-8.352 0-8.826-.783C3 19.93 3 19.537 3 19c0-2 2-5 9-5s9 3 9 5m-3.846-.03a22 22 0 0 0 1.838-.102c-.042-.348-.26-.93-1.043-1.5C17.027 16.697 15.24 16 12 16s-5.027.697-5.949 1.367c-.783.57-1.001 1.152-1.043 1.5.396.046.978.081 1.838.102C8.081 19 9.74 19 12 19s3.919 0 5.154-.03m-12.142.529-.001-.007z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAccountIcon;
