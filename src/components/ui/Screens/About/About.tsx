import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="flex my-4 justify-center text-center font-mono text-4xl max-sm:text-2xl">
        About
      </h1>
      <div className=" py-4 bg-gradient-to-r from-indigo-500 to-blue-100">
        <div className="mx-auto w-2/3  flex justify-center items-center">
          <p className="text-mono text-3xl">
            Easily monitor price changes and trends with our intuitive price
            change charts. We offer hourly, daily, and weekly price
            fluctuations, enabling you to make informed decisions when buying or
            selling. Our website keeps you updated with a clear visual
            representation of price movements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
