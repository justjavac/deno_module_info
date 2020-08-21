import moduleInfo from "../mod.ts";
import type { ModuleInfo } from "../mod.ts";

const result: ModuleInfo | null = await moduleInfo("12");

console.log(result);
