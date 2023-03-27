import React from "react";

const SingleData = (props) => {
  console.log(props.value);
  const { name, description, features, image, links, published_in } =
    props.value;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">features</h2>
          {features.map((feature, index) => {
            return (
              <p>
                {index + 1}. {feature}
              </p>
            );
          })}
          <div className="border border-warning"></div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="card-title text-4xl font-bold mb-2">{name}</h1>
              <div className="flex gap-2 items-center">
                <i class="fa-regular fa-calendar-days"></i>
                <p className="font-bold">{published_in}</p>
              </div>
            </div>
            <div className="border border-warning rounded-lg p-4 hover:text-white hover:bg-slate-500 text-2xl text-rose-300 ">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
