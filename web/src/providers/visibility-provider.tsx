import {
  Activity,
  createContext,
  type FC,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { useNui } from "@/hooks/useNui";
import { IsRunningInBrowser } from "@/lib/misc";
import { fetchNui } from "@/lib/fetchNui";

interface VisibilityProviderValue {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const VisibilityProviderContext = createContext<VisibilityProviderValue | null>(
  null
);

/**
 * `VisibilityProvider`
 * @param component
 * @param children
 **/

export const VisibilityProvider: FC<{
  children: ReactNode;
  component: string;
}> = ({ children, component }) => {
  const [visible, setVisible] = useState(false);
  useNui<boolean>(`setVisible${component}`, setVisible);
  useEffect(() => {
    if (visible) {
      const keyHandler = (keyboardEvent: KeyboardEvent) => {
        if (["Escape"].includes(keyboardEvent.key)) {
          if (!IsRunningInBrowser()) {
            fetchNui("hideComponent", {
              action: `setVisible${component}`,
              data: false,
            });
          } else {
            setVisible(false);
          }
        }
      };
      window.addEventListener("keydown", keyHandler);
      return () => window.removeEventListener("keydown", keyHandler);
    }
  }, [visible, component]);
  return (
    <VisibilityProviderContext.Provider value={{ visible, setVisible }}>
      <Activity mode={visible ? "visible" : "hidden"}>{children}</Activity>
    </VisibilityProviderContext.Provider>
  );
};
