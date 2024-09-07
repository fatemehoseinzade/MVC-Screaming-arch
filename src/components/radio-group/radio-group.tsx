import { Option } from '../../types/global-types';

interface RadioGroupProps {
  name: string;
  options: Array<Option>;
  value: string;
  onSelect: (val: string) => void;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { options, name, onSelect } = props;

  const handleSelect = (option: Option): void => {
    onSelect(option.value);
  };

  return (
    <>
      {options?.map((option) => (
        <div className="flex flex-row items-center gap-2 cursor-pointer" onClick={() => handleSelect(option)}>
          <input type="radio" name={name} value={option.value} className="outline-none" />
          <p className="text-md font-normal">{option.label}</p>
        </div>
      ))}
    </>
  );
};

export default RadioGroup;
