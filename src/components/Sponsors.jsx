import React from "react";
import SponsorsCard from "./SponsorsCard";
import globalTemi from "../assets/GlobalTemi.jpg";
import drfoy from "../assets/DrFoy.jpg"
import abolaji from "../assets/abolaji.jpg"
import pstsola from "../assets/pstsola.jpg"
import baba from "../assets/baba.jpg"
import bolu from "../assets/bolu.jpg"
import haoma from "../assets/haoma.jpg"

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
          cardImg={drfoy}
          cardName={"Tochukwu Macfoy- Dr Foy"}
          cardOther={"Dr. Foy"}
        />
        <SponsorsCard
          cardImg={abolaji}
          cardName={"Abolaji Adeola"}
          cardOther={""}
        />
        <SponsorsCard
          cardImg={pstsola}
          cardName={"Pastor Sola Okoduogha"}
          cardOther={"Senior Pastor The New Church(Global)"}
        />
        <SponsorsCard
          cardImg={baba}
          cardName={"Gaise Baba"}
          cardOther={"Artiste"}
        />
        <SponsorsCard
          cardImg={bolu}
          cardName={"Boluwaduro Okunade"}
          cardOther={"Financial Analyst"}
        />
        <SponsorsCard
          cardImg={haoma}
          cardName={"Haoma Worgwu"}
          cardOther={"The LinkedIn Queen"}
        />
        <SponsorsCard
          cardImg={""}
          cardName={"The Winlos"}
          cardOther={""}
        />       
      </div>
    </div>
  );
};

export default Sponsors;
