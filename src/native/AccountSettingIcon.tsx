import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgAccountSettingIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M16.33 11.5a.5.5 0 0 0-.485.379l-.336 1.344a4 4 0 0 0-1.288.745l-1.334-.382a.5.5 0 0 0-.57.231l-.5.866a.5.5 0 0 0 .085.61l.997.963a4 4 0 0 0 0 1.488l-.996.964a.5.5 0 0 0-.086.61l.5.865a.5.5 0 0 0 .57.231l1.335-.382c.375.323.81.578 1.287.745l.336 1.344a.5.5 0 0 0 .485.379h1a.5.5 0 0 0 .485-.379l.336-1.344a4 4 0 0 0 1.288-.745l1.334.381a.5.5 0 0 0 .57-.23l.5-.866a.5.5 0 0 0-.085-.61l-.997-.964a4 4 0 0 0 0-1.487l.997-.964a.5.5 0 0 0 .085-.61l-.5-.865a.5.5 0 0 0-.57-.231l-1.334.382a4 4 0 0 0-1.288-.745l-.336-1.344a.5.5 0 0 0-.485-.379zm2.5 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10.29 19c-1.903 0-3.342-.003-4.444-.03a22 22 0 0 1-1.838-.102c.042-.348.26-.93 1.043-1.5.83-.603 2.359-1.228 5.017-1.348a7 7 0 0 1 .605-2.018C3.937 14.094 2 17.032 2 19c0 .537 0 .93.174 1.217C2.648 21 4.416 21 11 21h.255a7 7 0 0 1-.965-2m-6.28.492.002.007z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAccountSettingIcon;
