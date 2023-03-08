import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="about">
      <Navigation />
      <div className="header">
        <h2>Nous estimons que tout le monde mérite d'avoir une belle peau.</h2>
        <p>
          En 2019, lorsque nous avons créé Dyna, notre objectif était simple :
          permettre à tout le monde d'avoir une belle peau. Depuis, nous nous
          employons tous les jours à créer les formules les plus originales, les
          plus pures et les plus efficaces dans le domaine des soins de la peau.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam autem
          cumque dolorem praesentium cum aspernatur officia perspiciatis
          deleniti architecto rem quisquam, iusto inventore in sint nemo
          explicabo, id eum maxime, asperiores harum? Amet, corrupti blanditiis
          incidunt explicabo eos maiores unde, reprehenderit ullam non commodi
          quaerat est aperiam officiis magni assumenda.
        </p>
        <p>
          Nos objectifs : que vous soyez satisfait(e) de votre peau et que votre
          routine quotidienne de soin de la peau soit vraiment un plaisir.
        </p>
      </div>

      <div className="container-bg">
        <img src="./img1-about.jpg" alt="" />
      </div>

      <div className="main-top">
        <div className="container-text">
          <p>
            Nous avons soigneusement conçu nos produits à base de vitamines, de
            minéraux et de plantes afin d'apporter à votre peau les nutriments
            dont elle a besoin et d'améliorer globalement votre santé et votre
            vitalité.
          </p>
        </div>
        <img className="img2" src="./img2-about.jpg" alt="image d'un produit" />
        <img
          className="img3"
          src="./img3-about.jpg"
          alt="image d'une femme avec de la crème"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
