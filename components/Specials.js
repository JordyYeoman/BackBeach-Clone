const Specials = () => {
  return (
    <section className="relative Fredericka px-16 py-20 background-img1 mt-16 specialsBanner flex justify-center">
      <div className="xl:max-w-screen-xl lg:flex lg:items-center relative z-10">
        <div className="relative py-4 flex items-center justify-center">
          <div className="relative rounded-full border-blue-900 hero-circle circle-item">
            <img
              class="rounded-full absolute top-0 h-full w-full object-cover"
              src="/assets/news-placeholder.png"
            />
          </div>
          <span className="text-white p-4 top-0 absolute bg-red-500 border-dashed rounded-lg border-2 border-white">
            What's On
          </span>
          <span className="text-white p-4 bottom-0 absolute bg-blue-400 border-dashed rounded-lg border-2 border-white">
            10.6.20
          </span>
        </div>
        <div className="px-16">
          <div className="mb-8 flex flex-col ">
            <h2 className="text-6xl text-red-400">Mother's Day</h2>
          </div>
          <div className="sourceSans">
            <span>
              <p className="text-gray-800 text-lg">
                Join us to celebrate your mum this Mother's Day. Breakfast and
                Lunch are pretty full but we are still taking dinner bookings so
                yo....
              </p>
            </span>
            <button className="bg-blue-900 text-lg mt-4 text-white border-white border-2 border-dashed Fredericka p-2 sm:p-4 rounded-lg flex items-center">
              Read More
              <span className="pl-16">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="white"
                  viewBox="0 0 451.846 451.847"
                >
                  <g>
                    <path
                      d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
    L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
    c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
