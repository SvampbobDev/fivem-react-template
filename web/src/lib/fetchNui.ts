import { IsRunningInBrowser } from "./misc";

/**
 * Triggers a callback registered with the REGISTER_NUI_CALLBACK native.
 * @param callback The target callback name.
 * @param data The data that you wish to send to the target callback.
 * @param mockData The data that will be returned if you're running in the browser.
 * @returns The data sent from the target callback.
 **/

export async function fetchNui<T = unknown>(
  callback: string,
  data?: unknown,
  mockData?: T
): Promise<T> {
  if (IsRunningInBrowser() && mockData !== undefined) return mockData;

  const options = {
    method: "post",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(data),
  };

  const resource = (window as any).GetParentResourceName
    ? (window as any).GetParentResourceName()
    : "rasca-gana";

  try {
    const resp = await fetch(`https://${resource}/${callback}`, options);

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const response = await resp.json();
    return response;
  } catch (error) {
    console.error(`[fetchNui] Error calling ${callback}:`, error);
    throw error;
  }
}
