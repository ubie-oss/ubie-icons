import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFavoriteRemoveIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M7.5 3C4.38 3 2 5.519 2 9c0 2.397 1.606 4.89 3.447 6.922 1.881 2.076 4.213 3.893 6.057 4.946a1 1 0 0 0 .992 0c.84-.48 1.782-1.118 2.736-1.868h-2.12C11.595 19 10 17.85 10 16s1.596-3 3.111-3h7.63C21.502 11.701 22 10.336 22 9c0-3.481-2.38-6-5.5-6-1.35 0-2.457.677-3.3 1.45-.447.41-.847.87-1.2 1.326a10.6 10.6 0 0 0-1.2-1.326C9.958 3.677 8.85 3 7.5 3"
    />
    <Path
      fill="currentColor"
      d="M12 16c0-.552.498-1 1.111-1h7.778c.614 0 1.111.448 1.111 1s-.497 1-1.111 1H13.11C12.497 17 12 16.552 12 16"
    />
  </Svg>
);
export default SvgFavoriteRemoveIcon;
