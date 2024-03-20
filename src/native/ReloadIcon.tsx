import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgReloadIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M5.063 4.645c1.82-1.765 4.223-2.712 6.697-2.641 2.473.07 4.823 1.155 6.549 3.022A10 10 0 0 1 20 7.534V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.317a7.8 7.8 0 0 0-1.521-2.424c-1.343-1.452-3.17-2.296-5.094-2.35-1.924-.056-3.793.68-5.208 2.053s-2.267 3.273-2.372 5.296.544 4.01 1.809 5.536c1.265 1.527 3.046 2.475 4.964 2.64 1.918.167 3.822-.462 5.307-1.751a7.83 7.83 0 0 0 2.438-4h2.168c-.433 2.232-1.58 4.253-3.263 5.714-1.909 1.658-4.357 2.466-6.823 2.252-2.466-.213-4.756-1.43-6.382-3.394-1.627-1.964-2.461-4.517-2.326-7.118s1.23-5.044 3.05-6.809"
    />
  </Svg>
);
export default SvgReloadIcon;
