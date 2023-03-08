import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Boutique = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="boutique">
      <Navigation />
      <div className="text-defilement">
        <span class="txt t1">
          Des sources éthiques ☼ Sans cruauté envers les animaux ☼ Ingrédients
          provenant de sources naturelles ☼&nbsp;
        </span>
        <span class="txt t1">
          Des sources éthiques ☼ Sans cruauté envers les animaux ☼ Ingrédients
          provenant de sources naturelles ☼&nbsp;
        </span>
        <span class="txt t1">
          Des sources éthiques ☼ Sans cruauté envers les animaux ☼ Ingrédients
          provenant de sources naturelles ☼&nbsp;
        </span>
      </div>

      <div className="container-items">
        <div className="item">
          <div className="item1"></div>
          <p>Nettoyant quotidien</p>
          <p>24,00 €</p>
        </div>

        <div className="item">
          <div className="item2"></div>
          <p>Tonique</p>
          <p>22,00 €</p>
        </div>

        <div className="item">
          <div className="item3"></div>
          <p>Masque hydratant</p>
          <p>30,00 €</p>
        </div>

        <div className="item">
          <div className="item4"></div>
          <p>Lotion pour le corps</p>
          <p>24,00 €</p>
        </div>

        <div className="item">
          <div className="item5"></div>
          <p>Crème de nuit</p>
          <p>32,00 €</p>
        </div>

        <div className="item">
          <div className="item6"></div>
          <p>Masque à l'argile</p>
          <p>26,00 €</p>
        </div>

        <div className="item">
          <div className="item7"></div>
          <p>Huile pour le visage</p>
          <p>35,00 €</p>
        </div>

        <div className="item">
          <div className="item8"></div>
          <p>Crème contour des yeux</p>
          <p>48,00 €</p>
        </div>

        <div className="item">
          <div className="item9"></div>
          <p>Baume hydratant lèvre</p>
          <p>18,00 €</p>
        </div>

        <div className="item">
          <div className="item10"></div>
          <p>Masques contour des yeux</p>
          <p>12,00 €</p>
        </div>

        <div className="item">
          <div className="item11"></div>
          <p>Savon purifiant pour le corps</p>
          <p>8,00 €</p>
        </div>

        <div className="item">
          <div className="item12"></div>
          <p>Lots de produits</p>
          <p>À partir de 85€</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Boutique;
