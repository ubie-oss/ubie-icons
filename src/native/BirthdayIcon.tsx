import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgBirthdayIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M12 7a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 1l-.855 1.485-.855 1.485c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m6 2h-5V6h-2v3H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3m1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z"
    />
    <Path
      fill="currentColor"
      d="M13 6.733a1.99 1.99 0 0 1-2-.003c-.597-.347-1-.994-1-1.73 0-.38.1-.73.29-1.03l.855-1.485L12 1l1.71 2.97c.19.3.29.65.29 1.03a2 2 0 0 1-1 1.733"
    />
  </Svg>
);
export default SvgBirthdayIcon;
