import { Dispatch, forwardRef, SetStateAction, useRef, useState } from 'react';
import { Option } from '../../types/global-types';
import clsx from 'clsx';
import Checkbox from '../checkbox/checkbox';
import { useClickOutside } from '../../hooks/click-outside-element';
import Input from '../input/input';
import { useDebounce } from '../../hooks/debounce';

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: Array<Option>;
  multi?: boolean;
  readonly?: boolean;
  className?: string;
  errorMessage?: string;
  onSelect: Dispatch<SetStateAction<string[]>>;
}

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    label,
    placeholder = 'select the option',
    errorMessage,
    options,
    multi = true,
    readonly = false,
    className,
    onSelect,
    ...rest
  } = props;

  const [openDropdown, setOpenDropDown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Array<Option>>([]);
  // const [searchLabel, setSearchLabel] = useState('');
  // const [searchedOptions, setSearchOptions] = useState<Array<Option>>(options);

  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectRef, () => setOpenDropDown(false));

  const onToggleDropDown = (): void => {
    setOpenDropDown(!openDropdown);
  };

  const isItemSelected = (option: Option): boolean => {
    const isSelected = selectedOptions.find((item) => item.value === option.value);

    if (!!isSelected) {
      return true;
    }
    return false;
  };

  const addItemToList = (option: Option): void => {
    if (!multi) setSelectedOptions([option]);
    else setSelectedOptions([...selectedOptions, option]);
  };

  const removeItemFromList = (option?: Option, e?: any): void => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (!multi) setSelectedOptions([]);
    else {
      const filterdList = selectedOptions.filter((item) => item.value !== option?.value);
      setSelectedOptions(filterdList);
    }
  };

  const handleSelect = (option: Option): void => {
    if (!isItemSelected(option)) {
      addItemToList(option);
    } else if (multi) {
      removeItemFromList(option);
    }
  };

  const setSelectValue = (): JSX.Element => {
    if (selectedOptions.length > 0) {
      if (!multi) return <p>{selectedOptions[0].label}</p>;
      else
        return (
          <div className="flex flex-row">
            {selectedOptions.map((option) => (
              <div
                className="bg-gray-100 px-2 mx-1 flex items-center gap-2"
                onClick={(e) => removeItemFromList(option, e)}
              >
                <p>{option.label}</p>
                <img alt="" src={'./assets/svg/close.svg'} />
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
    <div className="relative flex flex-col min-w-44 " ref={selectRef}>
      {/* Title */}
      {label && <label className="ms-1 font-bold mb-[0.5px]">{label}</label>}
      {/* Main Part */}
      <div
        className={clsx(
          'w-full flex flex-row justify-between items-center bg-white border border-gray-300 rounded-md px-3 py-1 cursor-pointer',
          {
            'border-red-600 bg-red-50': errorMessage
          }
        )}
        onClick={onToggleDropDown}
      >
        <div className="flex flex-row gap-1 ">
          {setSelectValue()}

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

          <img alt="" src={'/assets/svg/arrow-bottom.svg'} className={clsx({ 'rotate-180': openDropdown })} />
        ) : (
          // </div>
          selectedOptions.length > 0 && (
            <div className="w-3" onClick={() => removeItemFromList()}>
              <img alt="" src={'./assets/svg/close.svg'} />
            </div>
          )
        )}
      </div>
      {/* Dropdown */}
      {openDropdown && (
        <div className="absolute top-14 flex flex-col w-full bg-white border border-gray-300 rounded-md mt-1 overflow-y-scroll max-h-32 scroll-smooth no-scrollbar overflow-x-hidden">
          {options.map((option, index) => {
            return (
              <div
                className={clsx('px-3 py-1 cursor-pointer hover:scale-[1.01] hover:bg-gray-100', {
                  'border-b border-gray-200': index != options.length - 1
                })}
                onClick={() => handleSelect(option)}
              >
                {!multi ? option.label : <Checkbox value={isItemSelected(option)} label={option.label} />}
              </div>
            );
          })}
        </div>
      )}
      {/* Error Handling */}
      <p className="text-red-600 ms-1 text-sm mt-1">{errorMessage}</p>
    </div>
  );
});
export default Select;
