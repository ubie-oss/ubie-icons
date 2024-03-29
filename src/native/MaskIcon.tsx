import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMaskIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M10.449 8.184a1 1 0 0 1-.633 1.265l-1.5.5a1 1 0 1 1-.632-1.898l1.5-.5a1 1 0 0 1 1.265.633M13.551 8.184a1 1 0 0 0 .633 1.265l1.5.5a1 1 0 1 0 .632-1.898l-1.5-.5a1 1 0 0 0-1.265.633"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a7.98 7.98 0 0 0 5.873-2.568l-.002-.003h.005l.003-.004-.008.003-.002.001-.003.001-.008.004-.028.01-.098.037q-.126.048-.353.124c-.302.1-.733.233-1.262.365-1.052.263-2.511.53-4.117.53s-3.065-.267-4.118-.53a17 17 0 0 1-1.614-.489l-.098-.036-.028-.011-.009-.004h-.002l-.002-.002-.008-.003A7.98 7.98 0 0 0 12 20m7.983-7.476a7.96 7.96 0 0 1-1.501 4.166q.018-.093.018-.19v-3.34zm-2.514-1.099 2.373-1.017a8.003 8.003 0 0 0-15.684 0l2.373 1.017.09-.03c.302-.1.733-.233 1.261-.365 1.053-.263 2.512-.53 4.118-.53s3.066.267 4.118.53a17 17 0 0 1 1.35.395M5.519 16.69a7.96 7.96 0 0 1-1.502-4.166l1.483.635V16.5q0 .096.018.19m2.849-3.72c-.34.085-.633.17-.868.243v2.574c.235.073.528.158.868.243.947.237 2.238.47 3.632.47s2.685-.233 3.633-.47c.34-.085.632-.17.867-.243v-2.574a16 16 0 0 0-.867-.243c-.948-.237-2.239-.47-3.633-.47s-2.684.233-3.632.47"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMaskIcon;
