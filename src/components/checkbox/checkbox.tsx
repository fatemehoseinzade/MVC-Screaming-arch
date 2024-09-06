interface CheckboxProps {
  label: string;
  value: boolean;
}
const Checkbox = (props: CheckboxProps) => {
  const { label, value } = props;
  return (
    <div className="flex flex-row items-center gap-2">
      <input type="checkbox" checked={value} className="outline-none" />
      <p className="text-md font-normal">{label}</p>
    </div>
  );
};

export default Checkbox;
