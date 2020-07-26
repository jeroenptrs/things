import { promisify } from "util";
import * as child from "child_process";

const exec = promisify(child.exec);

async function transpileWithDeno(_, id) {
  const { stdout, stderr } = await exec(
    `deno run --unstable --allow-read https://cdn.jsdelivr.net/gh/jeroenptrs/things@main/bundledenothing/transpile.ts ${id}`
  );
  if (!stderr) return stdout;
}

export default function () {
  return {
    name: "transpile Typescript code with Deno",
    transform: transpileWithDeno,
  };
}
