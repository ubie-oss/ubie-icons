import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMaleHumanIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M14.5 10.6l1.577 3.785a1 1 0 0 0 1.846-.77l-2.5-6A1 1 0 0 0 14.5 7h-5a1 1 0 0 0-.923.615l-2.5 6a1 1 0 1 0 1.846.77L9.5 10.6V21a1 1 0 1 0 2 0v-5h1v5a1 1 0 1 0 2 0z"
    />
  </Svg>
);
export default SvgMaleHumanIcon;
