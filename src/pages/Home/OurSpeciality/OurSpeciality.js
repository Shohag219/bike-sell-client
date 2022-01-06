import React from "react";

const OurSpeciality = () => {
  return (
    <div className="my-24">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-4 lg:mx-16 md:mx-8 sm:mx-24 mx-8 ">
        <div className=" lg:w-full sm:w-full md:w-full mx-auto  rounded-md px-0 py-0 lg:px-4 lg:py-8 md:px-4 md:py-8">
          <div className=" flex items-center  lg:justify-start">
            {/* img and title */}
            <div className="w-20 my-2">
              <img
                className="w-16"
                src="https://cdn-icons-png.flaticon.com/512/565/565350.png"
                alt="img1"
              />
            </div>
            <h2 className="font-medium text-lg">The Best Run</h2>
          </div>
          <div>
            {/* description and button */}
            <p>
              You can think of gears as the same thing as speeds – a bike with
              18 gears is an 18-speed bike. Bikes generally have 1, 3, 18, 21,
              24, or 27 speeds. (10- and 15-speeds are obsolete and you don't
              see them on new bikes anymore.) Lower numbers are the low gears,
              and higher numbers are the high gears. The Dream bike fill your
              dream.
            </p>
            <a href="#products">
              <button className="font-semibold my-2 rounded px-4 py-2 bg-purple-700 text-white">
                Explore more
              </button>
            </a>
          </div>
        </div>
        <div className="lg:w-full sm:w-full md:w-full mx-auto rounded-md px-0 py-0 lg:px-4 lg:py-8 md:px-4 md:py-8">
          <div className=" flex items-center  lg:justify-start">
            {/* img and title */}
            <div className="w-20 my-2">
              <img
                className="w-16"
                src="data:image/png;base64,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"
                alt="img1"
              />
            </div>
            <h2 className="font-medium text-lg">Service</h2>
          </div>
          <div>
            {/* description and button */}
            <p>
              This bike service will include brake & gear adjustment, general
              lubrication and a tyre inflation check. A full bike service is
              only needed if your bike hasn't been out of the shed for a long
              time, or if you ride on a daily basis. ... This is perfect if you
              have no time or transport to take your bike to a shop.
            </p>
            <button className="font-semibold my-2 rounded px-4 py-2 bg-purple-700 text-white">
              Explore more
            </button>
          </div>
        </div>
        <div className=" lg:w-full sm:w-full md:w-full mx-auto rounded-md px-0 py-0 lg:px-4 lg:py-8 md:px-4 md:py-8">
          <div className="flex items-center  lg:justify-start">
            {/* img and title */}
            <div className="w-20 my-2">
              <img
                className="w-16"
                src="https://bestsellingcarsblog.com/wp-content/uploads/2013/05/M-Org.-Picture-courtesy-of-mororcyclespecs.co_.za_.jpg"
                alt="img1"
              />
            </div>
            <h2 className="font-medium text-lg">Feature Bike</h2>
          </div>
          <div>
            {/* description and button */}
            <p>
              bicycle, also called bike, two-wheeled steerable machine that is
              pedaled by the rider's feet. On a standard bicycle the wheels are
              mounted in-line in a metal frame, with the front wheel held in a
              rotatable fork. The rider sits on a saddle and steers by leaning
              and turning handlebars that are attached to the fork.
            </p>
            <button className="font-semibold my-2 rounded px-4 py-2 bg-purple-700 text-white">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
