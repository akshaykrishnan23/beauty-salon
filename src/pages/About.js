import React from "react";
import MultiplePizzas from "../assets/land.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Bella Beauty salon , one of Trivandrum's most renowned hair stylists, opened it's first self-titled salon 
        in February of 1999 ,in  association with long-term companion and individual hairstylist Bobby Brown.
        It wouldn’t have been long until the salon was named TVM’s most arrangement commendable and celeb-substantial 
        excellence spot” by Times.Settled in the beautiful neighborhood of South India, squares from Cotton Hills,
        the rich space is really an impression of both Bobby and Kylie’s pattern setting style; an inviting and hip 
        condition that moves and obliges its select demographic.The open salon has a moderate, hang like mechanical structure
         that is unmistakably one of a kind and present day.Overwhelmed with characteristic daylight through 
        distribution center measured windows and bay windows amid the day, the comfortable present day space has a cozy
        yet vaporous feel.While the look of the salon sets the tone for a top of the line involvement, it is the well
        disposed,individual and mindful administration matched with the profoundly gifted styling group that really makes 
        the Bella Beauty Salon unique.
        </p>
      </div>
    </div>
  );
}

export default About;
