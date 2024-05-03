import React from "react";


const SponsorsCard = ({cardImg, cardName, cardOther}) => {
  return (
    <div className="sponsor_card">
      <div className="cardImg">
        <img src={cardImg} alt="Global Temi" />
      </div>
      <div className="cardContent">
        <div>
          <p className="cardName">{cardName}</p>
        </div>
        <div>
          <p className="cardOther">{cardOther}</p>
        </div>
      </div>
    </div>
  );
};

export default SponsorsCard;
