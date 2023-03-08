import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Ingredients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="ingredients">
      <Navigation />
      <h2>Liste des ingrédients</h2>

      <div className="container">
        <div className="article1">
          <div className="img-article1"></div>
            <h4>Argousier</h4>
            <p>
              Tout commence par une idée. Peut-être voulez-vous créer une
              entreprise. Peut-être voulez-vous donner une nouvelle dimension à
              un passe-temps. Ou peut-être avez-vous un projet créatif que vous
              souhaitez partager avec le monde entier.
            </p>
        </div>

        <div className="article2">
          <div className="img-article2"></div>
            <h4>Thé vert</h4>
            <p>
              Tout commence par une idée. Peut-être voulez-vous créer une
              entreprise. Peut-être voulez-vous donner une nouvelle dimension à
              un passe-temps. Ou peut-être avez-vous un projet créatif que vous
              souhaitez partager avec le monde entier.
            </p>
        </div>

        <div className="article3">
          <div className="img-article3"></div>
            <h4>Narcisse</h4>
            <p>
              Tout commence par une idée. Peut-être voulez-vous créer une
              entreprise. Peut-être voulez-vous donner une nouvelle dimension à
              un passe-temps. Ou peut-être avez-vous un projet créatif que vous
              souhaitez partager avec le monde entier.
            </p>
        </div>

        <div className="article4">
          <div className="img-article4"></div>
            <h4>Aloe vera</h4>
            <p>
              Tout commence par une idée. Peut-être voulez-vous créer une
              entreprise. Peut-être voulez-vous donner une nouvelle dimension à
              un passe-temps. Ou peut-être avez-vous un projet créatif que vous
              souhaitez partager avec le monde entier.
            </p>
        </div>

        <div className="article5">
          <div className="img-article5"></div>
            <h4>Eau</h4>
            <p>
              Tout commence par une idée. Peut-être voulez-vous créer une
              entreprise. Peut-être voulez-vous donner une nouvelle dimension à
              un passe-temps. Ou peut-être avez-vous un projet créatif que vous
              souhaitez partager avec le monde entier.
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ingredients;
