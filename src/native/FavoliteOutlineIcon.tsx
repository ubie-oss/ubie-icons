import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFavoliteOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.5 5C5.62 5 4 6.481 4 9c0 1.603 1.144 3.61 2.928 5.579 1.574 1.736 3.495 3.277 5.072 4.257 1.577-.98 3.498-2.52 5.072-4.257C18.856 12.609 20 10.603 20 9c0-2.519-1.62-4-3.5-4-.65 0-1.293.323-1.95.925-.655.6-1.225 1.39-1.718 2.13a1 1 0 0 1-1.664 0c-.493-.74-1.063-1.53-1.719-2.13C8.793 5.323 8.15 5 7.5 5M2 9c0-3.481 2.38-6 5.5-6 1.35 0 2.457.677 3.3 1.45.447.41.847.87 1.2 1.326a10.6 10.6 0 0 1 1.2-1.326C14.042 3.677 15.15 3 16.5 3 19.62 3 22 5.519 22 9c0 2.397-1.606 4.89-3.447 6.922-1.881 2.076-4.213 3.893-6.057 4.946a1 1 0 0 1-.992 0c-1.844-1.053-4.176-2.87-6.057-4.946C3.606 13.89 2 11.397 2 9"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFavoliteOutlineIcon;
