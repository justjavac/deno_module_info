import moduleInfo, { type ModuleInfo } from "../mod.ts";

const result: ModuleInfo | null = await moduleInfo("12");

console.log(result);
