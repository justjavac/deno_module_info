export interface ModuleInfo {
  name: string;
  description: string;
  star_count: number;
}

interface ModuleInfoResponse {
  success: boolean;
  data: ModuleInfo;
}

export default async function moduleInfo(
  mod: string,
): Promise<ModuleInfo> {
  const response = await fetch(
    `https://api.deno.land/modules/${mod}`,
  );

  const { success, error, data }: ModuleInfoResponse = await response.json();
  
  if (success) {
    return data;
  } else {
    console.error(`Error: error`);
    Deno.exit(0);
  }
}
