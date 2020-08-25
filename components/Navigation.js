import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const iconSizes = '27px';
  return (
    <nav className="relative flex flex-col w-full h-auto text-blue-800 items-center bg-white font-semibold border-b border-gray-200 sourceSans">
      <ul className="flex flex-col items-center w-full sm:flex-row py-4 justify-between px-4 lg:w-4/5 xl:max-w-screen-xl">
        <li className="flex w-full sm:hidden justify-between border-b border-gray-200 py-2">
          <span className="flex items-center px-2">
            <svg
              className="mx-1"
              version="1.1"
              id="Capa_1"
              width="12px"
              height="12px"
              fill="#f27256"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 405.333 405.333"
            >
              <g>
                <g>
                  <path
                    d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752
			c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64
			C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32
			c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"
                  />
                </g>
              </g>
            </svg>
            08 9791 6575
          </span>
          <button
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen);
            }}
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isMobileNavOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </li>
        <li className="flex justify-center">
          <img
            src="/assets/wine-cups.png"
            alt="beach resturaunt logo"
            className="max-w-xs"
          />
        </li>
        <li className="flex items-center justify-center w-full">
          <Link href="/">
            <a className="w-full sm:w-auto flex flex-col items-center">
              <div className="flex flex-row py-2">
                <span className="hidden sm:flex items-center px-2">
                  <svg
                    className="mx-1"
                    version="1.1"
                    id="Capa_1"
                    width="12px"
                    height="12px"
                    fill="#f27256"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 405.333 405.333"
                  >
                    <g>
                      <g>
                        <path
                          d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752
			c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64
			C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32
			c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"
                        />
                      </g>
                    </g>
                  </svg>
                  08 9791 6575
                </span>
                <span className="hidden md:flex items-center">
                  <svg
                    className="mx-1"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    fill="#f27256"
                    viewBox="0 0 25.99 25.99"
                  >
                    <g>
                      <g>
                        <path
                          d="M18.82,18.488h-2.359c-0.229,0.373-0.451,0.73-0.666,1.072h2.512l4.291,5.357H3.392l4.292-5.357h2.511
			c-0.214-0.342-0.437-0.699-0.666-1.072H7.17L1.162,25.99h23.666L18.82,18.488z"
                        />
                        <path
                          d="M20.409,7.413C20.409,3.319,17.088,0,12.995,0S5.581,3.319,5.581,7.413c0,4.094,7.414,14.827,7.414,14.827
			S20.409,11.507,20.409,7.413z M9.288,7.413c0-2.049,1.661-3.707,3.707-3.707s3.707,1.658,3.707,3.707s-1.661,3.707-3.707,3.707
			S9.288,9.462,9.288,7.413z"
                        />
                      </g>
                    </g>
                  </svg>
                  Lot 256, Ocean Drive, Bunbury
                </span>
              </div>
              <div className="text-3xl border-2 border-solid rounded-lg border-orange-500 p-1 w-full text-center Fredericka">
                Make a Reservation
              </div>
            </a>
          </Link>
        </li>
        <li className="hidden md:flex items-center justify-center px-0 lg:px-12">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#f27256"
            width={iconSizes}
            height={iconSizes}
          >
            <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z" />
          </svg>
          <svg
            version="1.1"
            id="Layer_1"
            fill="#f27256"
            xmlns="http://www.w3.org/2000/svg"
            width={iconSizes}
            height={iconSizes}
            viewBox="0 0 169.063 169.063"
          >
            <g>
              <path
                d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
              />
              <path
                d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
              />
              <path
                d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
              />
            </g>
          </svg>
        </li>
        <li className="hidden sm:block md:hidden">
          <button
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen);
            }}
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isMobileNavOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </li>
      </ul>
      <ul
        className={`flex-col flex-grow ${
          isMobileNavOpen ? 'flex' : 'hidden'
        } md:flex md:flex-row py-4 justify-between px-8 w-full lg:w-4/5 xl:max-w-screen-xl text-center text-2xl md:text-base`}
      >
        <li className="py-2 md:py-0">Home</li>
        <li className="py-2 md:py-0">Dining</li>
        <li className="py-2 md:py-0">Lunch</li>
        <li className="py-2 md:py-0">Functions</li>
        <li className="py-2 md:py-0">Breakfast</li>
        <li className="py-2 md:py-0">What's On</li>
        <li className="py-2 md:py-0">Reservations</li>
        <li className="py-2 md:py-0">About</li>
        <li className="py-2 md:py-0">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
