import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const About = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-16">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Dream Bike
            </div>
            <a
              href="#product"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Customar setisfection is our main priority
            </a>
            <p class="mt-2 text-gray-500">
              Dream Bike, a local bicycle shop may offer clothing and other
              accessories, spare and replacement parts, tools, and a variety of
              services. Services may include expert fitting and custom bike
              building or ordering, maintenance and repairs from experienced
              bicycle mechanics, and organized group rides and classes.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
