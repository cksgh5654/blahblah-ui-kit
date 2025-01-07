import { createContext, FC, useContext, useState } from "react";
import { RootProps, TabsContextProps } from "../types/types";

const TabsContext = createContext<TabsContextProps>({
  selectedValue: "",
  handleClickTrigger: () => {},
});

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(`TabsContext should be used within TabsContext.Provider`);
  }
  return context;
};

const Root: FC<RootProps> = ({ children, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const handleClickTrigger = (value: string) => {
    setSelectedValue(value);
  };
  const tabsContextValue = {
    selectedValue,
    handleClickTrigger,
  };

  return (
    <TabsContext.Provider value={tabsContextValue}>
      {children}
    </TabsContext.Provider>
  );
};

export default Root;
