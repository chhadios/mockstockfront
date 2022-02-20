import React from "react";
import Stonks from '../../../assets/images/stonks.webp'

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container px-16 sm:px-32 py-16 sm:py-24 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">What is Mock Stocks?</h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-full">
            Virtual Stock Trading (also known as Paper Trading) is similar to actual trading where you can buy and sell stocks. However, here no real money is involved. You invest only in virtual money.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <img className="opacity-90 object-cover object-center w-full h-72 rounded-md shadow" src={Stonks} alt="Stonks webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

