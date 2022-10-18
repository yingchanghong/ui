import typescript from "rollup-plugin-typescript2";
import vuePlugin from "rollup-plugin-vue";
import resolve from "rollup-plugin-node-resolve"; // 自动识别后缀
import babel from "rollup-plugin-babel";
import common from "rollup-plugin-commonjs";
import vars from "postcss-simple-vars";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./core/index.ts",
    output: [
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "Tests", // window.VUtils
      },
      {
        file: "dist/index.esm.js", // package.json 中 "module": "dist/index.es.js"
        format: "esm", // es module 形式的包， 用来import 导入，可以 tree shaking
      },
    ],
    external: ["vue"],
    plugins: [
      postcss({
        extensions: [".css"],
      }),
      vars(),
      resolve(),
      common(),
      typescript(),
      vuePlugin(),
      babel({
        exclude: "node_modules/**",
        extensions: [".js", ".vue", ".css"],
      }),
    ],
  },
];
