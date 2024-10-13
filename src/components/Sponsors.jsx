import React from "react";
import SponsorsCard from "./SponsorsCard";
import globalTemi from "../assets/GlobalTemi.jpg";

const Sponsors = () => {
  return (
    <div>
      <div className="speakerTitle">
        <p>Speakers</p>
      </div>
      <div className="sponsors-grid">
        <SponsorsCard
          cardImg={globalTemi}
          cardName={"Temilade Salami"}
          cardOther={"Global Temi"}
        />
        <SponsorsCard
          cardImg={globalTemi}
          cardName={"Temilade Salami"}
          cardOther={"Global Temi"}
        />
        <SponsorsCard
          cardImg={globalTemi}
          cardName={"Temilade Salami"}
          cardOther={"Global Temi"}
        />
       
      </div>
    </div>
  );
};

export default Sponsors;
