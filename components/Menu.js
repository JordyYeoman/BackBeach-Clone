const Menu = () => {
  return (
    <div className="Fredericka text-2xl text-white flex justify-center">
      <div className="w-full flex flex-col flex-wrap sm:flex-row justify-center items-center pt-12 pb-12 xl:max-w-screen-xl">
        <div className="relative py-4 px-4">
          <div className="relative rounded-full border-red-500 hero-circle circle-item">
            <img
              className="rounded-full absolute top-0 h-full w-full object-cover"
              src="/assets/call-to-action-1.png"
            />
          </div>
          <span className="p-4 absolute bg-blue-400 border-dashed rounded-lg border-2 border-white menu-title">
            Dining Menu
          </span>
        </div>
        <div className="relative py-4 px-4 lg:px-8">
          <div className="relative rounded-full border-blue-400 hero-circle circle-item">
            <img
              className="rounded-full absolute top-0 h-full w-full object-cover"
              src="/assets/call-to-action-1.png"
            />
          </div>
          <span className="p-4 absolute bg-gray-800 border-dashed rounded-lg border-2 border-white menu-title">
            Lunch Menu
          </span>
        </div>
        <div className="relative py-4 px-4">
          <div className="relative rounded-full border-gray-800 hero-circle circle-item">
            <img
              className="rounded-full absolute top-0 h-full w-full object-cover"
              src="/assets/call-to-action-1.png"
            />
          </div>
          <span className="p-4 absolute bg-red-500 border-dashed rounded-lg border-2 border-white menu-title">
            Functions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
