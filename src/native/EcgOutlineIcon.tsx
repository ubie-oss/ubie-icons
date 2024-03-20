import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgEcgOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 5.25C2 4.007 2.895 3 4 3h16c1.105 0 2 1.007 2 2.25v13.5c0 1.243-.895 2.25-2 2.25H4c-1.105 0-2-1.007-2-2.25zm2 0c0-.127.04-.21.07-.25h15.86c.03.04.07.123.07.25v13.5a.42.42 0 0 1-.07.25H4.07a.42.42 0 0 1-.07-.25V14h2.5a1 1 0 0 0 .97-.758l.422-1.685 1.127 5.64a1 1 0 0 0 1.942.078l1.114-3.896A1 1 0 0 0 13 14h4.5a1 1 0 1 0 0-2h-3.78l-.771-2.316a1 1 0 0 0-1.91.041l-.867 3.034L8.98 6.804a1 1 0 0 0-1.951-.047L5.72 12H4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEcgOutlineIcon;
