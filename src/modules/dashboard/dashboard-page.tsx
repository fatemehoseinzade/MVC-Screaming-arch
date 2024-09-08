import { useState } from 'react';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import { OutlineSearchFavoriteIcon } from '../../icons';
import Button from '../../components/button/button';
import Checkbox from '../../components/checkbox/checkbox';
import { Option } from '../../types/global-types';

const DashboardPage = () =>
{
  const [value, setValue] = useState('');
  const [radio, setRadio] = useState('2');
  const [selected, setSelected] = useState<Array<Option>>([]);
  const [gender, setGender] = useState(false);

  const onSubmit = (): void =>
  {
    console.log(value, selected)
  }

  return (
    <div className="flex flex-col gap-3 items-start">
      <Input
        label="Search"
        containerClassName="grid-col-2"
        placeholder={'Search...'}
        errorMessage='cfdsfs'
        value={value}
        onChange={setValue}
        startIcon={<OutlineSearchFavoriteIcon dimensions={16} />}
      />
      <Select
        label="Select "
        className="grid-col-4"
        selected={selected}
        onSelect={setSelected}
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' }
        ]}
      />
      {/* <RadioGroup
        name="group"
        value={radio}
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' }
        ]}
        onSelect={setRadio}
      /> */}
      <Checkbox label={'female'} value={gender} onChange={() => setGender(!gender)} className="mb-2" />
      <Button label={'submit'} onClick={onSubmit} className="mb-2" />
    </div>
  );
};

export default DashboardPage;
