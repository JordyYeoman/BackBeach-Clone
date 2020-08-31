const Specials = () => {
  return (
    <section className="relative Fredericka px-2 md:px-16 py-20 background-img1 mt-16  flex justify-center">
      <div className="lg:flex lg:items-center relative z-10">
        <div className="xl:max-w-screen-xl">
          <div className="mb-8 flex flex-col border-b-2 border-teal-200">
            <h2 className="text-red-300 Pacifico text-5xl pl-8">Contact</h2>
            <h3 className="text-6xl md:text-5xl Fredericka ">
              Send us a message below<br className="block sm:hidden"></br>
            </h3>
          </div>
          <form className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full md:w-1/2 pr-2">
              <input
                className="border-teal-400 my-2 border-2 border-dashed rounded-md p-2"
                placeholder="Your Name"
              ></input>
              <input
                className="border-teal-400 my-2 border-2 border-dashed rounded-md p-2"
                placeholder="Your Phone"
              ></input>
              <input
                className="border-teal-400 border-2 my-2 border-dashed rounded-md p-2"
                placeholder="Your Email"
              ></input>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                className="border-teal-400 border-2 my-2 border-dashed h-24 md:h-auto rounded-md p-2 min-h-1/2"
                placeholder="Your Message"
              ></input>
              <button className="bg-red-500 text-lg mt-4 w-full text-white border-white border-2 border-dashed Fredericka p-1 sm:p-2 rounded-lg flex items-center">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Specials;
