import moduleInfo, { type ModuleInfo } from "../mod.ts";

const result: ModuleInfo | null = await moduleInfo("std");

console.log(result);
