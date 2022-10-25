// export function createBEM(prefixName: string) {
//   const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
//   const e = (element: string = "") =>
//     element ? _bem(prefixName, "", element, "") : "";
//   const m = (modifier: string = "") =>
//     modifier ? _bem(prefixName, "", "", modifier) : "";
//   const be = (blockSuffix: string = "", element: string = "") =>
//     blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
//   const bm = (blockSuffix: string = "", modifier: string = "") =>
//     blockSuffix && modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
//   const em = (element: string = "", modifier: string = "") =>
//     element && modifier ? _bem(prefixName, "", element, modifier) : "";
//   const bem = (
//     blockSuffix: string = "",
//     element: string = "",
//     modifier: string = ""
//   ) =>
//     blockSuffix && modifier && element
//       ? _bem(prefixName, blockSuffix, element, modifier)
//       : "";
//   const is = (name: string, state: string | boolean) =>
//     state ? `is-${name}` : "";
//   return {
//     b,
//     e,
//     be,
//     bem,
//     bm,
//     em,
//     m,
//   };
// }
