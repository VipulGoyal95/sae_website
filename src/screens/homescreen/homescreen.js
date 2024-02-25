import React from "react";
import Header from "../../components/header/header";
import "./homescreen.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "../../components/footer/footer";
const Homescreen = () => {
  const [text] = useTypewriter({
    words: [
      "SAE Nit Kurukshetra",
    ],
    loop: {},
    typeSpeed: 30,
  });
  return (
    <div>
      <Header />
      <div className="top-container">
        <img
          src="https://media.licdn.com/dms/image/C561BAQF8auZ1QzaZVQ/company-background_10000/0/1595058394478/sae_nit_kkr_cover?e=2147483647&v=beta&t=ZhrrMfR6-nMY_xz-EZE7xmMazlFgfeFgpllMlkkXaiY"
          alt="sae"
        />
        <h1>
          Welcome To
          <br />
          <span>{text}</span>
          <Cursor />
        </h1>
      </div>
      <Footer/>
    </div>
  );
};

export default Homescreen;
