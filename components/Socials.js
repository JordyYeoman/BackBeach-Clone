const Socials = () => {
  return (
    <section className="px-4 flex justify-center">
      <div className="xl:max-w-screen-xl">
        <div className="mb-8 flex flex-col border-b-2 border-gray-200">
          <h2 className="text-red-300 Pacifico text-5xl pl-8">Welcome to</h2>
          <h3 className="text-5xl Fredericka">
            The BackBeach<br className="block sm:hidden"></br> Eating House
          </h3>
        </div>
        <div className="sourceSans">
          <span>
            <p className="text-gray-800">
              There's only one place like the Backbeach Cafe & resturaunt,
              located on Bunbury;s Backbeach with uninterrupted views of crisp
              white sand and the Indian Ocean, The perfect place to eat, relax
              and enjoy.
            </p>
            <p className="text-gray-600">
              We are proud to support local business and local producers bu
              sourcing as much as possible locally, including fish from Aufusta,
              beef and chicken from Western Australia (DBC), coffee from
              Yallingup and wines from Ferguson Valley, Margaret River and
              throughout the South West.
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
    </section>
  );
};

export default Socials;
