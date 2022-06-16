import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricinOptions = [
    { id: 1, name: "Free", price: 0, benefits:[
      'lifetime free',
      'unlimited de',
      'localized deals',
      'fantastic deals',
      'crazy deals'
    ] },
    { id: 2, name: "Regular", price: 9.99, benefits:[
      'everything on free',
      'unlimited de',
      'localized deals',
      'fantastic deals',
      'crazy deals'
    ] },
    { id: 3, name: "Premium", price: 19.53, benefits:[
      'everything on Regular free',
      'unlimited de',
      'localized deals',
      'fantastic deals',
      'crazy deals'
    ] },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-thin text-white">Best Deals of the Town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora
        voluptas nemo unde iure at facere fuga qui expedita soluta?
      </p>

      <div className="grid md:grid-cols-3 gap-3 mt-8">
          {
              pricinOptions.map(option =>  <PricingOption
              
              key={option.id}
              option={option}
              ></PricingOption>)
          }
      </div>
    </div>
  );
};

export default Pricing;
