import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="top-part">
          <div className="left-part">
            <h5>Spécialement pour vous</h5>
            <p>
              Inscrivez-vous et découvrez en avant-première nos réductions, nos
              conseils et toutes les informations sur Dyna.
            </p>
          </div>

          <div className="right-part">
            <input type="text" placeholder="Adresse e-mail" />
            <button>S'inscrire</button>
          </div>
        </div>

        <div className="bottom-part">
          <div className="left-bottom-part">
            <h5>Ingrédients naturels</h5>
            <p>Sans cruauté envers les animaux. Sans parabène. Végan.</p>
          </div>

          <div className="right-bottom-part">
            <div className="part1">
              <h5>Dyna</h5>
              <NavLink to="/boutique">
                <p>Produits</p>
              </NavLink>

              <NavLink to="/about">
                <p>À propos</p>
              </NavLink>

              <NavLink to="/blog">
                <p>Blog</p>
              </NavLink>

              <NavLink to="/contact">
                <p>Contact</p>
              </NavLink>
            </div>

            <div className="part2">
              <h5>Informations</h5>
              <NavLink to="/ingredients">
                <p>Ingrédients</p>
              </NavLink>

              <NavLink to="/envois">
                <p>Envois et retours</p>
              </NavLink>

              <NavLink to="/conditions">
                <p>Conditions d'utilisation</p>
              </NavLink>

              <NavLink to="/politique">
                <p>Politique de confidentialité</p>
              </NavLink>
            </div>

            <div className="part3">
              <h5>Réseaux sociaux</h5>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
