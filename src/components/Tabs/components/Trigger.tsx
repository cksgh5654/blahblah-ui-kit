import { FC } from "react";
import { TriggerProps } from "../types/types";
import { useTabsContext } from "./Root";

const Trigger: FC<TriggerProps> = ({ children, value, className, onClick }) => {
  const { handleClickTrigger } = useTabsContext();
  return (
    <li
      onClick={() => {
        onClick?.();
        handleClickTrigger(value);
      }}
      className={
        className
          ? `tabs-trigger-container ${className}`
          : "tabs-trigger-container"
      }
    >
      {children}
    </li>
  );
};

export default Trigger;
