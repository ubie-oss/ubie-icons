import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFingerDownIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 20a1 1 0 0 0 1-1v-7a1 1 0 0 1 1-1c.393 0 .628-.083.75-.18.08-.065.25-.24.25-.82 0-.117-.044-.342-.195-.69a8 8 0 0 0-.634-1.134c-.544-.83-1.259-1.71-1.917-2.447A1 1 0 0 1 14 5.063V4H8v1a1 1 0 0 1-.2.6c-.654.872-1.11 1.948-1.4 2.973C6.106 9.601 6 10.508 6 11c0 .298.218.781.882 1.24.637.441 1.561.76 2.618.76H12a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1m3-1a3 3 0 1 1-6 0v-4H9.5c-1.443 0-2.769-.431-3.757-1.115C4.782 13.219 4 12.202 4 11c0-.709.143-1.801.476-2.973.306-1.08.79-2.285 1.524-3.349V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.685c.627.721 1.3 1.565 1.844 2.396.309.472.589.959.794 1.431.2.459.362.976.362 1.488 0 1.02-.33 1.845-1 2.38-.312.25-.657.404-1 .497z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFingerDownIcon;
