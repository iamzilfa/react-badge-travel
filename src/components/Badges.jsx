import React from 'react'

const Badges = (props) => {
  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
      <div className="w-[175px] text-[12px] flex flex-col  relative"> 
          {badgeText && <div className="absolute top-[6px] left-[6px] bg-white py-[5px] px-[7px] rounded-[2px] font-bold">{badgeText}</div>}
          <img src={`/images/${props.item.coverImg}`} className="w-full h-full object-cover rounded-[9px] mb-[9px]" alt="/" />
          <div className="flex items-center">
              <img src="/images/star.png" alt="/" className="h-[14px]"/>
              <span>{props.item.stats.rating}</span>
              <span className="gray">({props.item.stats.reviewCount}) • </span>
              <span className="gray">{props.item.location}</span>
          </div>
          <p className="overflow-hidden text-ellipsis">{props.item.title}</p>
          <p className=""><span className="font-bold">From ${props.item.price}</span> / person</p>
      </div>
  )
}

export default Badges