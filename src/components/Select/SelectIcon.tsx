import SelectArrow from './Icons/SelectArrow';

interface SelectIconProps {
  className?: string;
  width?: number;
}

const SelectIcon = (props: SelectIconProps) => {
  const { className, width } = props;
  return (
    <span className={className}>
      <SelectArrow width={width} />
    </span>
  );
};

export default SelectIcon;
