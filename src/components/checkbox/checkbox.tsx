import clsx from "clsx";

interface CheckboxProps
{
  label: string;
  value: boolean;
  readOnly?: boolean;
  className?: string;
  disabled?: boolean;
  onChange?: (val: boolean) => void;
}
const Checkbox = (props: CheckboxProps) =>
{
  const { label, value, readOnly = false, disabled = false, className, onChange } = props;

  const onCheck = () =>
  {
    if (disabled || readOnly || onChange == null) { return };
    onChange(!value)
  }

  return (
    <div className={clsx("flex flex-row items-center gap-2 cursor-pointer", className)} onClick={onCheck}>
      <input type="checkbox" checked={value} className={"outline-none"} readOnly={readOnly} disabled={disabled} />
      <p className="text-md font-normal">{label}</p>
    </div>
  );
};

export default Checkbox;
