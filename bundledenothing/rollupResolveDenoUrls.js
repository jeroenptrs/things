function resolveDenoUrls(dir) {
  return function (importee) {
    if (importee.startsWith("https://")) {
      const newImportee = importee.replace("https://", `${dir}/gen/https/`);
      return newImportee.endsWith(".ts") ? `${newImportee}.js` : newImportee;
    }
  };
}

export default function () {
  const deno_dir = !!process.env.DENO_DIR ? process.env.DENO_DIR : `~/.deno`;

  return {
    name: "resolve Deno urls",
    resolveId: resolveDenoUrls(deno_dir),
  };
}
