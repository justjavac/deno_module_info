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
): Promise<ModuleInfo | null> {
  const response = await fetch(
    `https://api.deno.land/modules/${mod}`,
  );

  if (response.status === 404) {
    return null;
  }

  const result: ModuleInfoResponse = await response.json();
  return result.data;
}
