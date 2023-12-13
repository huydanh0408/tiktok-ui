// Sử dụng cơ chế override của customize-cra

const { override, useBabelRc } = require("customize-cra"); // commonjs require syntax

// tương tự export default ES6
module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);
