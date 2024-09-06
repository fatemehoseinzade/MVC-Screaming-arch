import Button from '../button/button';

const Topbar = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-4 bg-white justify-between items-center p-4">
      <div className="flex flex-row justify-around items-center">
        <Button label={''} />
      </div>
    </div>
  );
};

export default Topbar;
