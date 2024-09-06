import Button from '../button/button';
import Input from '../input/input';

const Topbar = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-4 bg-white justify-between items-center p-4">
      <div>
        <Input className="grid-col-4" placeholder={'Search...'} value={''} />
      </div>
      <div className="flex flex-row justify-around items-center">
        <Button label={''} />
      </div>
    </div>
  );
};

export default Topbar;
