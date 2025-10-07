import { IsRunningInBrowser } from "./misc";

interface NuiMessage<T = unknown> {
  action: string;
  data: T;
}

/**
 * simulates SEND_NUI_MESSAGE native
 *
 * Only used in developing environment
 * @param messages
 * @param timeout
 **/

export const debugNui = <P>(
  messages: NuiMessage<P>[],
  timeout = 1000
): void => {
  if (import.meta.env.DEV && IsRunningInBrowser()) {
    for (const message of messages) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent("message", {
            data: { action: message.action, data: message.data },
          })
        );
      }, timeout);
    }
  }
};
