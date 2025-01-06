import { HTMLAttributes, useEffect, useRef } from 'react';
import { useSelectContext } from '.';
interface SelectTriggerProps extends HTMLAttributes<HTMLDivElement> {}

const SelectTrigger = (props: SelectTriggerProps) => {
  const { children } = props;
  const triggerRef = useRef<HTMLDivElement>(null);
  const { handleTriggerRef, setIsOpen } = useSelectContext();

  useEffect(() => {
    if (!triggerRef.current) {
      return;
    }
    handleTriggerRef(triggerRef.current);
  }, []);

  return (
    <div {...props} ref={triggerRef} onClick={() => setIsOpen((prev) => !prev)}>
      {children}
    </div>
  );
};

export default SelectTrigger;
