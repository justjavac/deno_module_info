# deno_module_info

[![tag](https://img.shields.io/github/release/justjavac/deno_module_info)](https://github.com/justjavac/deno_module_info/releases)
[![Build Status](https://github.com/justjavac/deno_module_info/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_module_info/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_module_info)](https://github.com/justjavac/deno_module_info/blob/master/LICENSE)

Get module info of Deno from <https://deno.land/x>.

## Usage

```js
import moduleInfo, { type ModuleInfo} from 'https://deno.land/x/module_info/mod.ts';

await versionInfo('std');
```

output:

```ts
{
  name: "std",
  description: "A secure JavaScript and TypeScript runtime",
  star_count: 66566
}
```

## Example

```bash
deno run --allow-net https://deno.land/x/module_info/examples/std.ts
```

## License

[deno_module_info](https://github.com/justjavac/deno_module_info) is released
under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
