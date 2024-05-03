import React from "react";
// import about1 from "../assets/about1.jpg";
// import about2 from "../assets/about2.jpg";

const About = () => {
  return (
    <div className="about">
      // {/* <div className="side_images">
      //   <div className="about_imgs">
      //     <img className="about1" src={about1} alt="About 1" />
      //     <img className="about2" src={about2} alt="About 2" />
      //   </div>
      // </div> */}
      <div className="side2">
        <div>
          <h2 className="about_header">About Conference</h2>
          <p className="about_text">
            {" "}
            The convener of the Light conference Haoma Worgwu said in one of her
            interviews that the kingdom of God is lacking human capital in the
            market place, Priests in the systems was born out of a desire to see
            people function as priests in whatever mountain God is sending them
            to and not just the mountain of religion. There is a need for an
            upsurge of priests in this coming generation that will take the
            mountains for God, Unbelievers will no longer be seen as the pilots
            and the commanders of this mountains, The Light of believers will
            begin to shine so brightly that the world will have no choice but to
            recognize and give glory to God. Taking cue from the words of Isaac
            Newton If I have seen further than others, it is by standing upon
            the shoulders of giants and we agree that we can take place in
            purpose by following the guidance of those who have gone ahead of
            us, hence the need for the program{" "}
            <span>PRIESTS IN THE SYSTEMS</span>.
          </p>
        </div>
        <div className="side_under">
          <div className="under1">
            <p>Landmark University</p>
          </div>

          <div className="under2">
            <div>
              <h4>1</h4>
              <p>Day event</p>
            </div>

            <div>
              <h4>9</h4>
              <p>Speakers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
