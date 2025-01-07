interface SelectValueProps {
  className?: string;
  placeholder?: string;
  value?: string;
}

const SelectValue = (props: SelectValueProps) => {
  const { className, placeholder, value } = props;
  return <span className={className}>{value || placeholder}</span>;
};

export default SelectValue;
