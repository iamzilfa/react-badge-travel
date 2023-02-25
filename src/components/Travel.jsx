import React from "react";


const Travel = (props) => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex gap-8 p-10 items-center">
      <img src={`images/${props.item.image}`} alt="" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <img src="images/global.png" alt="/" />
          <span className="text-[10.24px] font-normal uppercase leading-[12px] tracking-[0.17em] text-[#2B283A]">
            {props.item.location}
          </span>
          <span className="text-[10.24px] font-normal leading-[12px] border-b text-[#918E9B]">
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <h1 className="font-bold text-[25px] leading-[30px] text-[#2B283A] pt-2 pb-4">
          {props.item.title}
        </h1>
        <div>
          <p className="font-bold text-[10.24px] leading-[12px] text-[#2B283A]">
            <span>{props.item.startDate}</span> - <span>{props.item.endDate}</span>
          </p>
          <p className="font-normal text-[10.24px] leading-[150%] pt-2">
            {props.item.description}
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className={`border-b w-[95%] ${props.line}`}></div>
    </div>
    </section>
  );
};

export default Travel;
