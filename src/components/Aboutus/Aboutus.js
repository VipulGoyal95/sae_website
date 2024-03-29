import React, { useEffect } from "react";
import "./aboutus.css";
import Aos from "aos";
import "aos/dist/aos.css";
import icon from "./assests/Autokritigallery_26.d8a7065e.jpg";
import icon2 from "./assests/AutokritiAboutUs.db8c31fd.jpeg";
import icon3 from "./assests/acceleronsimage.jpg";
import icon4 from "./assests/Nitroxgallery_5.55513fbb (1).jpg";
const Aboutus = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  let heading,picture,body;
  let speed1,speed2;
  if(props.page==='home'){
    heading="About Us";
    picture=icon;
    body="SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions";
    speed1=100;
    speed2=100;
  }

  if(props.page==="autokriti"){
    heading="About Autokriti";
    picture=icon2;
    body="Autokriti is north India's largest automobile workshop which began in 2010. Every year loads of students gets enrolled to gain firsthand knowledge of industrial vehicles. The last held physical autokriti in 2019 saw a participation of 700+ candidates. It involves overhauling of a star engine, which varied from a 2 stroke engine of a scooter in Autokriti 1 to 3.6L turbocharged V6 Porsche Cayenne in season 11.0; always in cahoots with technology. And not just the gearheads, but geeks from all branches of technology find here the stuffs of their interest.";
    speed1=100;
    speed2=100;
  }

  if(props.page==="accelerons"){
    heading="About Team Accelerons";
    picture=icon3;
    body="TEAM ACCELERONS is a student-led engineering team of SAE NIT Kurukshetra. The feeling of speed and precision, the tactical aspects, the way car looks, the way it behaves, that first lap excitement and the intrigues that surround it, are the things that drives the team to DESIGN, BUILD and RACE formula-style cars for the Formula Bharat and SUPRA competitions. From being a first-timer in SUPRA 2014 to standing on top among all NITS in SUPRA 2018, the Team has come a long way, upgrading itself with each passing season.. After all Felipe Massa rightly said, \"When you give up your hunger for success you are not racing full heartedly anymore.";
    speed1=200;
    speed2=200;
  }

  if(props.page==="nitrox"){
    heading="About Team Nitrox";
    picture=icon4;
    body="TEAM NITROX is a group of junkies with a shared objective to create a fierce beast of an ATV (All-terrain vehicle). The team was founded back in 2010 under SAE NIT KURUKSHETRA. Since its foundation, the team has grown in all aspects, be its technical or competitive. From one of the few teams that design its own CVT to representing the country in BAJA SAE Illinois, the team has repeatedly provided evidence of its exceptional growth.";
    speed1=200;
    speed2=200;
  }
  return (
    <div className="Container-2">
      <div className="About-Us">
        <img
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-offset={speed1}
          src={picture}
          alt="abc"
          loading="lazy"

        />
        <div
          data-aos="fade-up"
          data-aos-offset={speed2}
          data-aos-once="true"
          className="about-content"
        >
          <h1>{heading}</h1>
          <p>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
