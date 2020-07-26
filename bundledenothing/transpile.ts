const file = Deno.args[0];

const result = await Deno.transpileOnly({
  [file]: await Deno.readTextFile(file),
});

await Deno.stdout.write(new TextEncoder().encode(result[file].source));
