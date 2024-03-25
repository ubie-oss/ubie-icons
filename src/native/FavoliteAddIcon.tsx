import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFavoliteAddIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="currentColor" d="M18 12a1 1 0 1 0-2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3z" />
    <Path
      fill="currentColor"
      d="M4 9c0-2.519 1.62-4 3.5-4 .65 0 1.293.323 1.95.925.655.6 1.225 1.39 1.718 2.13a1 1 0 0 0 1.664 0c.493-.74 1.063-1.53 1.719-2.13C15.207 5.323 15.85 5 16.5 5 18.38 5 20 6.481 20 9c0 .507-.114 1.053-.327 1.627.623.31 1.184.726 1.66 1.223C21.75 10.908 22 9.946 22 9c0-3.481-2.38-6-5.5-6-1.35 0-2.457.677-3.3 1.45-.447.41-.847.87-1.2 1.326a10.6 10.6 0 0 0-1.2-1.326C9.958 3.677 8.85 3 7.5 3 4.38 3 2 5.519 2 9c0 2.397 1.606 4.89 3.447 6.922 1.881 2.076 4.213 3.893 6.057 4.946a1 1 0 0 0 .992 0q.278-.158.568-.34a6 6 0 0 1-1.49-1.966c-1.489-.98-3.211-2.4-4.646-3.984C5.144 12.61 4 10.604 4 9"
    />
  </Svg>
);
export default SvgFavoliteAddIcon;
