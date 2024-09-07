import { useState } from 'react';
import Input from '../../components/input/input';
import Select from '../../components/select/select';

const DashboardPage = () => {
  const [value, setValue] = useState('');
  const [radio, setRadio] = useState('2');
  const [selected, setSelected] = useState<Array<string>>([]);
  return (
    <div className="grid grid-cols-3 gap-3">
      <Input label="Search" className="grid-col-4" placeholder={'Search...'} value={value} onChange={setValue} />
      <Select
        label="Select "
        className="grid-col-4"
        value={selected}
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
    </div>
  );
};

export default DashboardPage;
