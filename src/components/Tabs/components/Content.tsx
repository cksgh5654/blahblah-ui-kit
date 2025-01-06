import { FC } from "react";
import { ContentProps } from "../types/types";
import { useTabsContext } from "./Root";

const Content: FC<ContentProps> = ({ children, value, className }) => {
  const { selectedValue } = useTabsContext();
  return (
    <div
      className={
        className
          ? `tabs-content-container ${className}`
          : "tabs-content-container"
      }
    >
      {value === selectedValue && children}
    </div>
  );
};

export default Content;
