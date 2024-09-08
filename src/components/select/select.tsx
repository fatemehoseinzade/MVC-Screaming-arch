import { Dispatch, forwardRef, SetStateAction, useRef, useState } from 'react';
import { Option } from '../../types/global-types';
import clsx from 'clsx';
import Checkbox from '../checkbox/checkbox';
import { useClickOutside } from '../../hooks/click-outside-element';
// import Input from '../input/input';
// import { useDebounce } from '../../hooks/debounce';
import { OutlineArrowDown1Icon, OutlineArrowUp1Icon, OutlineCloseIcon } from '../../icons';

interface SelectProps
{
  label?: string;
  placeholder?: string;
  options: Array<Option>;
  multi?: boolean;
  readonly?: boolean;
  containerClassname?: string;
  errorMessage?: string;
  selected: Array<Option>;
  onSelect: Dispatch<SetStateAction<Array<Option>>>;
}

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) =>
{
  const {
    label,
    placeholder = 'select the option',
    errorMessage,
    options,
    multi = true,
    readonly = false,
    containerClassname,
    selected,
    onSelect,
    ...rest
  } = props;

  const [openDropdown, setOpenDropDown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Array<Option>>(selected);
  // const [searchLabel, setSearchLabel] = useState('');
  // const [searchedOptions, setSearchOptions] = useState<Array<Option>>(options);

  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectRef, () => setOpenDropDown(false));


  const onToggleDropDown = (): void =>
  {
    setOpenDropDown(!openDropdown);
  };

  const isItemSelected = (option: Option): boolean =>
  {
    const isSelected = selectedOptions.find((item) => item.value === option.value);

    if (!!isSelected)
    {
      return true;
    }
    return false;
  };

  const addItemToList = (option: Option): void =>
  {

    if (!multi)
    {
      setSelectedOptions([option]);
      onSelect([option])
    }
    else
    {
      setSelectedOptions([...selectedOptions, option]);
      onSelect([...selectedOptions, option])
    }
  };

  const removeItemFromList = (option?: Option, e?: any): void =>
  {
    if (e && e.stopPropagation) e.stopPropagation();
    if (!multi)
    {
      setSelectedOptions([]);
      onSelect([])
    }
    else
    {
      const filterdList = selectedOptions.filter((item) => item.value !== option?.value);
      setSelectedOptions(filterdList);
      onSelect(filterdList)
    }
  };

  const handleSelect = (option: Option): void =>
  {
    if (!isItemSelected(option))
    {
      addItemToList(option);
    } else if (multi)
    {
      removeItemFromList(option);
    }
  };

  const SelectedOptions = (): JSX.Element =>
  {
    if (selectedOptions.length > 0)
    {
      if (!multi) return <p>{selectedOptions[0].label}</p>;
      else
        return (
          <div className="flex flex-row">
            {selectedOptions.map((option) => (
              <div
                key={option.value}
                className="bg-gray-100 px-1 mx-1 flex items-center gap-1 rounded-md"
                onClick={(e) => removeItemFromList(option, e)}
              >
                <p>{option.label}</p>
                <OutlineCloseIcon dimensions={18} />
              </div>
            ))}
          </div>
        );
    }
    return <p>{placeholder}</p>;
  };

  // const onSearch = (): void => {
  //   if (searchLabel.length == 0) setSearchOptions(options);
  //   const filterdOptions = options.filter((item) => item.label.includes(searchLabel));
  //   setSearchOptions(filterdOptions);
  // };
  // useDebounce(onSearch);

  return (
    <div className="relative flex flex-col min-w-44" ref={selectRef}>

      {label && <label className="ms-1 font-bold mb-[0.5px]">{label}</label>}


      <div
        className={clsx(
          'w-full flex flex-row justify-between items-center bg-white border border-gray-300 rounded-md px-3 py-1 cursor-pointer',
          containerClassname,
          { 'border-red-600 bg-red-50': errorMessage }
        )}
        onClick={onToggleDropDown}
      >
        <div className="flex flex-row gap-1">
          {SelectedOptions()}

          {/* <input
            value={searchLabel}
            onChange={(e) => setSearchLabel(e.target.value)}
            className="outline-none border-none p-0"
          /> */}
        </div>

        {multi ? (
          // <div className="flex flex-row items-center divide-x">
          //   {selectedOptions.length > 0 && (
          //     <div className="w-3" onClick={() => removeItemFromList()}>
          //       <img alt="" src={'./assets/svg/close.svg'} />
          //     </div>
          //   )}

          <>
            {openDropdown ? <OutlineArrowUp1Icon /> : <OutlineArrowDown1Icon />}
          </>
          // </div>
        ) : (
          selectedOptions.length > 0 && (
            <OutlineCloseIcon dimensions={20} onClick={() => removeItemFromList()} />
          )
        )}
      </div>


      {openDropdown && (
        <div className="absolute top-14 flex flex-col w-full bg-white border border-gray-300 rounded-md mt-1 overflow-y-scroll max-h-32 scroll-smooth no-scrollbar overflow-x-hidden">
          {options.map((option, index) =>
          {
            return (
              <div
                key={option.value}
                className={clsx('px-3 py-1 cursor-pointer hover:scale-[1.01] hover:bg-gray-100', {
                  'border-b border-gray-200': index != options.length - 1
                }, isItemSelected(option) && 'bg-gray-100')}
                onClick={() => handleSelect(option)}
              >
                {!multi ? option.label : <Checkbox value={isItemSelected(option)} label={option.label} readOnly />}
              </div>
            );
          })}
        </div>
      )}

      <p className="text-red-600 ms-1 text-sm mt-1">{errorMessage}</p>
    </div>
  );
});
export default Select;
