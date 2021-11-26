import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white">
      <div className="px-24 py-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 ">
        <div className="">
          <div>
            <h2 className="font-semibold text-2xl custom-font mb-6">INFO</h2>

            <i className="fas my-2 flex fa-square">
              <p className="ml-2 font-sans font-normal	">The Bikes</p>
            </i>

            <i className="fas flex fa-square">
              <p className="ml-2 font-sans font-normal	">Better Quality</p>
            </i>

            <i className="fas my-2 flex fa-square">
              <p className="ml-2 font-sans font-normal	">Best for Ride</p>
            </i>
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="font-semibold text-2xl custom-font mb-6">BIkes</h2>

            <i className="fas my-2 flex fa-square">
              <p className="ml-2 font-sans font-normal	">R 15</p>
            </i>

            <i className="fas flex fa-square">
              <p className="ml-2 font-sans font-normal	">Hyabusa</p>
            </i>

            <i className="fas my-2 flex fa-square">
              <p className="ml-2 font-sans font-normal	">BMW</p>
            </i>
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="font-semibold text-2xl custom-font mb-6">LINKS</h2>

            <i className="fas my-2 flex fa-square">
              <p className="ml-2 font-sans font-normal	">About</p>
            </i>

            <i className="fas flex fa-square">
              <p className="ml-2 font-sans font-normal	">Contact</p>
            </i>

            <i className="fas my-2 flex fa-square">
              <p className="ml-2 font-sans font-normal	">Media</p>
            </i>
          </div>
        </div>
        <form className="flex justify-center flex-col ">
          <div className="mb-2">
            <input className="border h-10 w-full rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
          </div>
          <button className="px-4 py-2 w-3/4  bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
            Subscribe Now
          </button>
        </form>
      </div>
      <div>
        <p className="text-right  mr-4 pb-2 text-green-500">
          image and icon used from{" "}
          <a
            href="https://www.freepik.com"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>
        </p>
      </div>
      <hr className="bg-white w-3/4 mx-auto" />
      <div className="text-center py-4">
        <small>{"\u00a9"}2021 Mahmudul Hasan Shohag . All Right Reserves</small>
      </div>
    </div>
  );
};

export default Footer;
