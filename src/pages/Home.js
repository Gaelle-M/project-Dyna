import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="home">
      <Navigation />
      <div className="header">
        <div className="title">
          <h1>
            Des formules riches en nutriments pour tous les types de peau.
          </h1>

          <div className="container-button">
            <NavLink to="/boutique">
              <button>Voir nos produits</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="title-container">
          <h2>promotions</h2>
        </div>

        <div className="img-container">
          <img src="./lotion1.png" alt="image du produit" />
          <h3>Boutique Corps</h3>

          <img src="./lotion-2.png" alt="image d'un produit" />
          <h3>Boutique Visage</h3>
        </div>
      </div>

      <div className="main-part2">
        <div className="container">
          <div className="left-part">
            <h2>Votre peau n'aura jamais été aussi douce.</h2>
            <p>
              Notre masque hydratant contient de l'aloe vera et de l'acide
              hyaluronique pour une peau d'une douceur incroyable.
            </p>
            <NavLink to="/boutique">
              <button>Voir nos produits</button>
            </NavLink>
          </div>

          <div className="center-part">
            <img src="./creme3.jpg" alt="image d'un produit" />
          </div>

          <div className="right-part">
            <img src="woman-gif.gif" alt="image d'une femme et d'un produit" />
          </div>
        </div>
      </div>

      <div className="main-part3">
        <div className="left-part-img"></div>
        <div className="right-part">
          <h2>Des sérums et des huiles efficaces.</h2>
          <p>
            Que vous souhaitiez assouplir ou régénérer votre peau, nos sérums et
            nos huiles sauront répondre à vos besoins.
          </p>
          <NavLink to="/about">
          <button>En savoir plus</button>
          </NavLink>
        </div>
      </div>

      <div className="bottom-part1">
        <h4>Quelques informations sur nos produits</h4>
        <div className="para-part">
          <div className="para1">
            <h5>Des formules sûres</h5>
            <p>
              Nous n'utilisons que des produits bio, d'une qualité irréprochable
              et respectueux de votre peau.
            </p>
          </div>

          <div className="para2">
            <h5>Une grande efficacité</h5>
            <p>
              Nous avons créé et testé nous-mêmes nos produits de soin de la
              peau de façon à ce que les résultats soient réellement visibles.
            </p>
          </div>

          <div className="para3">
            <h5>Des sources éthiques</h5>
            <p>
              Vous pouvez dormir sur vos deux oreilles : nous utilisons
              uniquement des matières premières naturelles provenant de sources
              éthiques.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-part2">
        <div className="bg-bottom">
          <h2>
            Produits bio. Qualité irréprochable. Respectueux de la peau
          </h2>
          <NavLink to="/ingredients">
          <button>Voir nos ingrédients</button>
          </NavLink>
        </div>
      </div>

      <div className="bottom-part3">
        <div className="left-part">
          <div className="img-face"></div>
          <div className="title">
            <p>Créez-vous une routine</p>
          </div>
        </div>

        <div className="right-part">
          <div className="container">
            <h2>Les bases des soins de la peau</h2>
            <p>
              Vous trouverez ici des conseils, des informations sur les nouveaux
              produits, les avis d'autres client(e)s et bien plus encore.
            </p>
            <NavLink to="/blog">
            <button>Lire toutes les publications</button>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
