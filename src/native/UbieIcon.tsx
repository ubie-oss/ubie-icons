import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgUbieIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M7.933 17.817a8.2 8.2 0 0 1-1.048-1.95 1.05 1.05 0 0 0-.366-.482l-2.155-1.558a4.575 4.575 0 0 1 .283-7.596.753.753 0 0 0 .27-1.006.74.74 0 0 0-1.026-.263 6.054 6.054 0 0 0-.394 10.06l4.539 3.285a.105.105 0 0 0 .146-.147z"
    />
    <Path
      fill="currentColor"
      d="M8.31 7.699a.105.105 0 0 0-.036-.163 2.8 2.8 0 0 0-1.213-.272 2.87 2.87 0 0 0-2.318 1.179 2.86 2.86 0 0 0 .627 3.988l.002.001.833.603a.105.105 0 0 0 .15-.03.1.1 0 0 0 .016-.055 8.22 8.22 0 0 1 1.938-5.251M6.325 5.661a.837.837 0 1 0 0-1.675.837.837 0 0 0 0 1.675"
    />
    <Path
      fill="currentColor"
      d="m13.295 4.667-3.13 2.275a7.486 7.486 0 0 0-1.657 10.457l1.807 2.487a1.66 1.66 0 0 0 2.324.368l7.841-5.697a6.112 6.112 0 1 0-7.185-9.89M8.252 5.701c.5.136.972.356 1.397.65a.1.1 0 0 0 .12 0l1.083-.788a.105.105 0 0 0 0-.17l-.233-.166a6 6 0 0 0-2.01-.96.74.74 0 0 0-.91.547.755.755 0 0 0 .553.887"
    />
  </Svg>
);
export default SvgUbieIcon;
