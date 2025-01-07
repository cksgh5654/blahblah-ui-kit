import { HTMLAttributes } from 'react';
import { useSelectContext } from '.';

interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  onOption: (value: string) => void;
  isSelected: boolean;
}

const SelectItem = (props: SelectItemProps) => {
  const { children, onOption, value, isSelected } = props;
  const { setIsOpen } = useSelectContext();

  const handleSelectItem = () => {
    onOption(value);
    setIsOpen(false);
  };

  return (
    <div {...props} onClick={handleSelectItem}>
      {children}
      {isSelected && '✔'}
    </div>
  );
};

export default SelectItem;
