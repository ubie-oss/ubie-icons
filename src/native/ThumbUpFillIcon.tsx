import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgThumbUpFillIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="m8.049 8.072-.779.83a1 1 0 0 0-.27.684V20a1 1 0 0 0 1 1h8.667c1.375 0 2.342-.52 3.011-1.347.586-.724.906-1.648 1.159-2.378l.024-.072.002-.005c.284-.819.564-1.81.774-2.734.205-.902.363-1.823.363-2.464 0-.86-.436-1.626-.984-2.153-.55-.529-1.33-.93-2.183-.93h-3.471l.117-.31c.35-.928.773-2.064 1.05-2.86.37-1.07.181-2.213-.405-2.961-.298-.38-.753-.72-1.343-.777-.613-.06-1.163.202-1.582.624-.528.532-2.017 2.107-3.36 3.534-.675.716-1.317 1.4-1.79 1.905M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
    />
  </Svg>
);
export default SvgThumbUpFillIcon;
