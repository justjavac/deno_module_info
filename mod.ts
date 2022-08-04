export interface ModuleInfo {
  name: string;
  description: string;
  star_count: number;
}

interface SuccessResponse {
  success: true;
  data: ModuleInfo;
}

interface FailResponse {
  success: false;
  error: string;
}

type ModuleInfoResponse = SuccessResponse | FailResponse;

export default async function moduleInfo(
  mod: string,
): Promise<ModuleInfo | null> {
  const response = await fetch(
    `https://api.deno.land/modules/${mod}`,
  );

  const result: ModuleInfoResponse = await response.json();

  if (result.success) {
    return result.data;
  } else {
    console.error("Error: %s", result.error);
    return null;
  }
}
