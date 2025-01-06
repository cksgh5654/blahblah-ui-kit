import {
  Children,
  createContext,
  Dispatch,
  FC,
  HTMLAttributes,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import SelectTrigger from './SelectTrigger';
import SelectValue from './SelectValue';
import SelectIcon from './SelectIcon';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';

interface SelectCompress {
  Trigger: typeof SelectTrigger;
  Value: typeof SelectValue;
  Icon: typeof SelectIcon;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
}

interface SelectProps extends HTMLAttributes<HTMLDivElement> {}

interface SelectContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  triggerRef: HTMLDivElement;
  handleTriggerRef: (refCurrent: HTMLDivElement) => void;
}

const SelectContext = createContext<SelectContextType>({
  isOpen: false,
  setIsOpen: () => {},
  triggerRef: document.createElement('div'),
  handleTriggerRef: () => {},
});

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('SelectContext의 Provider안에서 사용할 수 있습니다.');
  }
  return context;
};

const Select: FC<SelectProps> & SelectCompress = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerRef, setTriggerRef] = useState<HTMLDivElement>(
    document.createElement('div')
  );

  const { children } = props;

  const handleTriggerRef = (refCurrent: HTMLDivElement) => {
    setTriggerRef(refCurrent);
  };

  const selectContext = {
    isOpen,
    setIsOpen,
    triggerRef,
    handleTriggerRef,
  };

  const select = Children.toArray(children) as ReactElement[];

  const selectTrigger = select.find((item) => item.type === SelectTrigger);
  const selectContent = select.find((item) => item.type === SelectContent);

  return (
    <SelectContext.Provider value={selectContext}>
      <div {...props}>
        {selectTrigger}
        {isOpen && selectContent}
      </div>
    </SelectContext.Provider>
  );
};

Select.Trigger = SelectTrigger;
Select.Value = SelectValue;
Select.Icon = SelectIcon;
Select.Content = SelectContent;
Select.Item = SelectItem;

export default Select;
