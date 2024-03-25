/**
 * workaround for react-native-svg type definition issue
 * https://github.com/software-mansion/react-native-svg/issues/1638
 */
const template = (variables, { tpl }) => {
  return tpl`
  ${variables.imports};
  
  interface ISvgProps extends SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
    xmlSpace?: string;
  }
    
  const ${variables.componentName} = (props: ISvgProps) => (
    ${variables.jsx}
  );
  
  ${variables.exports};
  `;
};

module.exports = template;
