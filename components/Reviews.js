const Reviews = () => {
  return (
    <div className="Fredericka text-2xl text-white flex flex-col bg-center justify-center reviews py-32">
      <div className="w-full -mt-64 hidden sm:flex flex-col flex-wrap sm:flex-row justify-center items-center pb-24 xl:max-w-screen-xl">
        <div className="relative py-4 px-4">
          <div className="relative rounded-full border-red-500 hero-circle2 circle-item2">
            <img
              class="rounded-full absolute top-0 h-full w-full object-cover"
              src="/assets/call-to-action-1.png"
            />
          </div>
        </div>
        <div className="relative py-4 px-4">
          <div className="relative rounded-full border-blue-400 hero-circle2 circle-item2">
            <img
              class="rounded-full absolute top-0 h-full w-full object-cover"
              src="/assets/call-to-action-1.png"
            />
          </div>
        </div>
        <div className="relative py-4 px-4">
          <div className="relative rounded-full border-gray-800 hero-circle2 circle-item2">
            <img
              class="rounded-full absolute top-0 h-full w-full object-cover"
              src="/assets/call-to-action-1.png"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end items-end xl:max-w-screen-xl px-16 lg:px-32">
        <h2 className="text-4xl text-black">Happy Customers</h2>
        <div className="rounded-lg bg-red-500 sourceSans text-base w-1/2 p-8 border-white border-dashed border-2">
          <p className="border-b border-white-200 pb-4">
            "Ah! What a place. I could ho have breakfast every single day and
            not get tired by the views. The staff are very klind and helpful,
            and the food is AMAZING! A MUST bisit place if you're visiting
            Bunbury!
          </p>
          <p className="pt-4">- Jordy Yeoman</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
