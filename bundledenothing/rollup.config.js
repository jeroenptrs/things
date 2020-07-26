import { terser } from "rollup-plugin-terser";

import resolveUrls from "./rollupResolveDenoUrls.js";
import transpile from "./rollupTranspileWithDeno.js";

export default {
  output: {
    format: "es",
  },
  plugins: [transpile(), resolveUrls(), terser()],
};
