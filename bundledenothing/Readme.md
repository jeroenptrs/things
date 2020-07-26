```sh
deno bundle test/mod.ts dist/deno_bundle.js
# result: 70kb
```

vs

```sh
yarn build -i test/mod.ts -d dist
# result 20kb
```
