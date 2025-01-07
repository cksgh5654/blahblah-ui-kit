import {
  createContext,
  Dispatch,
  FC,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";

interface PopoverCompoundProps {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

interface PopoverContextProps extends HTMLAttributes<HTMLDivElement> {
  triggerRect: DOMRect;
  setTriggerRect: Dispatch<SetStateAction<DOMRect>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  position: "bottom-left" | "bottom-center" | "bottom-right";
}

export const PopoverContext = createContext<PopoverContextProps>({
  setTriggerRect: () => {},
  triggerRect: new DOMRect(),
  isOpen: false,
  setIsOpen: () => {},
  position: "bottom-right",
});

interface PopoverProps {
  children: ReactNode;
  className?: string;
  position?: "bottom-left" | "bottom-center" | "bottom-right";
}

const Popover: FC<PopoverProps> & PopoverCompoundProps = (props) => {
  const { children, position = "bottom-right" } = props;
  const [triggerRect, setTriggerRect] = useState(new DOMRect());
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = {
    triggerRect,
    setTriggerRect,
    isOpen,
    setIsOpen,
    position,
  };

  return (
    <PopoverContext.Provider value={contextValue}>
      <div {...props}>{children}</div>
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
