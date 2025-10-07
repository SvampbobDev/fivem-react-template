/**
 * Returns true if you're running on a browser.
 *
 * Returns false if you're running on the Chromium Embedded Framework.
 **/
export const IsRunningInBrowser = (): boolean =>
  !(window as unknown as { invokeNative: boolean }).invokeNative;

/**
 * Just a basic no operation function
 **/
export const NoOperationFunction = () => {};
