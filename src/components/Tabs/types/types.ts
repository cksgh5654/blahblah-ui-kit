import { PropsWithChildren } from "react";

/* Context */
export interface TabsContextProps {
  selectedValue: string;
  handleClickTrigger: (value: string) => void;
}
export interface RootProps extends PropsWithChildren {
  defaultValue: string;
}

/* List Component */
export interface ListProps extends PropsWithChildren {
  className?: string;
}

/* Trigger Component */
export interface TriggerProps extends PropsWithChildren {
  value: string;
  className?: string;
  onClick?: () => void;
}

/* Content Component */
export interface ContentProps extends PropsWithChildren {
  value: string;
  className?: string;
}
