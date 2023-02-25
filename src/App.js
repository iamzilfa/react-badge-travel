import React from "react";
import { badgeData } from "./components/badgeData";
import Badges from "./components/Badges";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Travel from "./components/Travel";
// import { travelData } from "./components/travelData";

function App() {
  // const data = travelData.map((item) => <Travel line={`${item === travelData[travelData.length-1] ? "border-transparent" : "border"}`} key={item.id} item={item}  />);

  const cards = badgeData.map((item) => {
    return <Badges key={item.id} item={item} />;
  });
  return (
    <div className="mb-10">

      {/* TRAVEL */}

      {/* <Navbar />
      {data} */}

      {/* BADGES */}

      <section className="flex flex-nowrap gap-[20px] overflow-x-auto">{cards}</section>

      {/* <Header /> */}
    </div>
  );
}

export default App;
