import moduleInfo from "../mod.ts";
import type { ModuleInfo } from "../mod.ts";

const result: ModuleInfo | null = await moduleInfo("std");

console.log(result);
