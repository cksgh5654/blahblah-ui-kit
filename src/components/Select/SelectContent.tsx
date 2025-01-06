import {
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useSelectContext } from '.';

interface SelectContentProps extends HTMLAttributes<HTMLDivElement> {}

const SelectContent = (props: SelectContentProps) => {
  const { children } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, triggerRef } = useSelectContext();
  const [location, setLocation] = useState({});

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      isOpen &&
      !triggerRef.contains(e.target as Node) &&
      contentRef.current &&
      !contentRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleTriggerRefRect = useCallback(() => {
    const locating = () => {
      const triggerDomRect = triggerRef.getBoundingClientRect();

      if (!triggerDomRect || !contentRef.current) {
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
      }

      const contentStyle = window.getComputedStyle(contentRef.current);

      const borderLeft = parseFloat(contentStyle.borderLeftWidth);
      const borderRight = parseFloat(contentStyle.borderRightWidth);

      const paddingLeft = parseFloat(contentStyle.paddingLeft);
      const paddingRight = parseFloat(contentStyle.paddingRight);

      return {
        top: triggerDomRect.y + triggerDomRect.height,
        left: triggerDomRect.x,
        width:
          triggerDomRect.width -
          borderLeft -
          borderRight -
          paddingLeft -
          paddingRight +
          'px',
      };
    };

    setLocation(locating());
  }, [triggerRef]);

  useEffect(() => {
    handleTriggerRefRect();

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', () => handleTriggerRefRect());
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', () => handleTriggerRefRect());
    };
  }, []);

  return (
    <div
      ref={contentRef}
      {...props}
      style={{ position: 'absolute', ...location }}
    >
      {children}
    </div>
  );
};

export default SelectContent;
