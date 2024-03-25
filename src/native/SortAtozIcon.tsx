import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgSortAtozIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.47 9.4h-2.99l-.26.82c-.21.67-.34.94-.94.94-.34 0-1.07-.13-1.07-.74 0-.2.046-.328.18-.705l.02-.055 2.022-5.567c.24-.658.482-1.323 1.538-1.323 1.08 0 1.32.64 1.57 1.33l2.01 5.57c.16.43.2.55.2.76 0 .57-.7.73-1.07.73-.61 0-.72-.26-.94-.94zm-1.49-4.6-.99 3.04h1.98z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="m19.56 15.29-3.72 4h3.67c.32 0 .88.06.88.85 0 .6-.3.86-.88.86h-4.83c-.42 0-1.39 0-1.39-1.01 0-.6.33-.96.7-1.36l3.72-3.99h-3.45c-.22 0-.88 0-.88-.85 0-.61.29-.86.88-.86h4.62c.4 0 1.38 0 1.38 1.02 0 .582-.33.94-.685 1.324zM6 18.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L8 18.586V4a1 1 0 1 0-2 0z"
    />
  </Svg>
);
export default SvgSortAtozIcon;
