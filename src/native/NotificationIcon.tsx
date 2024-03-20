import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgNotificationIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.125 4.054c1.998.201 3.425.952 4.343 2.111 1.028 1.297 1.282 2.942 1.282 4.406v4.322l2.039 2.524c.246.304.28.706.087 1.04-.193.333-.58.543-1.001.543H4.125c-.422 0-.808-.21-1-.544a.91.91 0 0 1 .086-1.04l2.039-2.524v-4.32c0-1.465.254-3.11 1.282-4.407.918-1.159 2.345-1.91 4.343-2.11V3c0-.552.504-1 1.125-1s1.125.448 1.125 1zM8.372 7.317C7.744 8.109 7.5 9.25 7.5 10.57v4.643c0 .21-.074.413-.211.583L6.318 17h11.364l-.97-1.203a.93.93 0 0 1-.212-.583v-4.643c0-1.32-.244-2.462-.872-3.254C15.055 6.593 14.031 6 12 6s-3.055.593-3.628 1.317"
      clipRule="evenodd"
    />
    <Path fill="currentColor" d="M14 20v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1z" />
  </Svg>
);
export default SvgNotificationIcon;
