const SignUp = () => {
  return (
    <section className="px-4 flex justify-center py-32 signUp border-white border-t-2 border-dashed -mt-1">
      <div className="xl:max-w-screen-xl">
        <div className="mb-8 flex flex-col border-b-2 border-gray-200">
          <h2 className="text-teal-300 Pacifico text-5xl pl-8">Sign Up</h2>
          <h3 className="text-5xl Fredericka text-white">
            Subscribe to our<br className="block sm:hidden"></br>newsletter
          </h3>
        </div>
        <form className="flex justify-between">
          <input
            className="border-white border-2 border-dashed rounded-md p-2 w-3/6 mr-1"
            placeholder="Your Name"
          ></input>
          <input
            className="border-white border-2 border-dashed rounded-md p-2 w-3/6"
            placeholder="Your Email"
          ></input>
        </form>
        <button className="bg-red-500 text-lg mt-4 w-full text-white border-white border-2 border-dashed Fredericka p-1 sm:p-2 rounded-lg flex items-center">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default SignUp;
