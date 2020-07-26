import { terser } from "rollup-plugin-terser";

export default {
  input: "./mod.ts",
  output: {
    file: "bundle.js",
    format: "es",
  },
  plugins: [terser()],
};
