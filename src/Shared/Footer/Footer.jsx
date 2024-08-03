import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className=" w-screen mx-auto bg-[#ff4880] text-white ">
    //   <div className=" px-6 py-12  max-w-7xl mx-auto ">
    //     <div className="md:flex md:-mx-3 md:items-center md:justify-between">
    //       <h1 className="text-xl font-semibold tracking-tight  md:mx-3 xl:text-2xl ">
    //         Join us
    //       </h1>

    //       <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
    //         <Link to="/register">
    //           {" "}
    //           <a
    //             href="#"
    //             className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
    //           >
    //             <span>Sign Up Now</span>

    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               className="w-5 h-5"
    //             >
    //               <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    //             </svg>
    //           </a>
    //         </Link>
    //       </div>
    //     </div>

    //     <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

    //     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //       <div>
    //         <p className="font-semibold  dark:text-white">
    //           Quick Link
    //         </p>

    //         <div className="flex flex-col items-start mt-5 space-y-2">
    //           <a
    //             target="_blank"
    //             href="https://web.facebook.com/roton.chodiry"
    //             className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             Facebook
    //           </a>
    //           <a
    //             target="_blank"
    //             href="https://www.linkedin.com/in/md-sana-ullah12/"
    //             className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             Linked in
    //           </a>
    //           <a
    //             target="_blank"
    //             href="https://x.com/MdSanaulla75762"
    //             className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             Twitter
    //           </a>
    //         </div>
    //       </div>

    //       <div>
    //         <p className="font-semibold dark:text-white">Pages</p>

    //         <div className="flex flex-col items-start mt-5 space-y-2">
    //           <Link to="/listing">
    //             <a
    //               href="#"
    //               className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //             >
    //               pet listing
    //             </a>
    //           </Link>
    //           <Link to="/campaign">
    //             <a
    //               href="#"
    //               className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //             >
    //               Donation Campaign
    //             </a>
    //           </Link>
    //           <Link to='/contract'>
    //             <a
    //               href="/contract"
    //               className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //             >
    //               Contract
    //             </a>
    //           </Link>
    //         </div>
    //       </div>

    //       <div>
    //         <p className="font-semibold  dark:text-white">
    //           Services
    //         </p>

    //         <div className="flex flex-col items-start mt-5 space-y-2">
    //           <a
    //             href=""
    //             className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             Create Campaign
    //           </a>
    //           <a
    //             href=""
    //             className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             Adopt & share pet
    //           </a>
    //           <a
    //             href=""
    //             className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             Trust platform for donation
    //           </a>
    //         </div>
    //       </div>

    //       <div>
    //         <p className="font-semibold  dark:text-white">
    //           Contact Us
    //         </p>

    //         <div className="flex flex-col items-start mt-5 space-y-2">
    //           <a
    //             href="#"
    //             className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             +8801569140343
    //           </a>
    //           <a
    //             href="#"
    //             className="transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
    //           >
    //             sanaullahroton01@gmail.com
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

    //     <div className="flex flex-col items-center justify-between sm:flex-row">
    //       <a href="#">
    //         <img
    //           className="w-36"
    //           src="https://i.ibb.co/L0v6r6Z/logo-finel-removebg-preview.png"
    //           alt=""
    //         />
    //       </a>

    //       <p className="mt-4 sm:mt-0 dark:text-gray-300">
    //         © Copyright {new Date().getFullYear()}. All Rights Reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <div className="relative mt-16 ">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="bg-[#202938]">
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  text-white">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <svg
                  className="w-8 text-teal-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
                  Lapse Pet
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-deep-purple-50">
                  At our Pet Adoption website, we are dedicated to finding
                  loving homes for animals in need.
                </p>
                <p className="mt-4 text-sm text-deep-purple-50">
                  We believe in the joy and enrichment pets bring to our lives,
                  and we are committed to making the adoption process simple,
                  enjoyable, and rewarding for both pets and adopters.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      References
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Cherry
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      eCommerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Apples
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Brochure
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Nonprofit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Educational
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Business
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Infopreneur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Forum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm ">
              © Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/md-sana-ullah12/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zm-14.1 20.54H3.54V9h4.59zm-2.3-13A2.64 2.64 0 015.63 2.9 2.64 2.64 0 018.9 5.63 2.64 2.64 0 015.63 7.9zm15.72 13h-4.6v-6.36c0-1.52-.03-3.47-2.12-3.47s-2.45 1.66-2.45 3.36v6.47h-4.59V9h4.4v1.57h.06a4.82 4.82 0 014.35-2.38c4.65 0 5.5 3.06 5.5 7.04v6.31z" />
                </svg>
              </a>
              <a
                href="https://x.com/MdSanaulla75762"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M22.46 6c-.77.35-1.61.58-2.46.69a4.26 4.26 0 001.88-2.34c-.81.48-1.72.83-2.68 1A4.23 4.23 0 0016.2 4c-2.34 0-4.23 1.89-4.23 4.23 0 .33.03.66.1.97-3.51-.18-6.63-1.86-8.71-4.42a4.22 4.22 0 00-.57 2.13c0 1.47.75 2.76 1.88 3.52a4.25 4.25 0 01-1.92-.53v.05c0 2.05 1.46 3.76 3.4 4.15a4.3 4.3 0 01-1.91.07c.54 1.69 2.1 2.92 3.95 2.95a8.53 8.53 0 01-5.29 1.83c-.34 0-.67-.02-1-.06a12.06 12.06 0 006.52 1.91c7.82 0 12.1-6.48 12.1-12.1 0-.18-.01-.35-.02-.53a8.57 8.57 0 002.12-2.19z" />
                </svg>
              </a>
              <a
                href="https://web.facebook.com/roton.chodiry"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
