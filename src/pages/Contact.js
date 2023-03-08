import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Formulaire from "../components/Formulaire";
import Navigation from "../components/Navigation";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  return (
    <div className="contact">
      <Navigation />
      <div className="container">
        <div className="left-part">
          <h2>Contactez-nous !</h2>
          <div className="container-para">
            <p>
              La beauté de votre histoire, c'est qu'elle va continuer à évoluer
              et que votre site peut évoluer avec elle. <br /><br /> Si vous souhaitez recevoir une box découverte des produits Dyna faites nous une demande via le formulaire.
            </p>
            <p>Télephone : 04 04 04 04 04</p>
          </div>
          <ul>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </ul>
        </div>

        <div className="right-part">
          <Formulaire />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
