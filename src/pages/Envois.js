import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Envois = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <div className="envois">
        <Navigation />
        <div className="container">
            <h2>Expédition</h2>
          <div className="expe-section1">
            <h4>Livraison nationale</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est vel excepturi debitis, tenetur inventore voluptatibus eius facere, neque voluptatum facilis, dolorem obcaecati dolor animi mollitia quo culpa doloribus rem explicabo reprehenderit. Accusantium repudiandae voluptas esse magni minus repellendus officia distinctio, ea dignissimos eos consequuntur animi quia possimus hic ratione.</p>
          </div>

          <div className="expe-section2">
            <h4>Livraison internationle</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus dolorem deleniti inventore consectetur illo quasi, dolor atque modi, quidem repellendus ut. Autem rerum blanditiis quia molestias debitis nostrum placeat cum nam, odio nobis obcaecati corrupti. Corporis quos aliquid dolorum laboriosam a odio dolores natus molestias perspiciatis aliquam, esse quod reprehenderit! Officiis consequuntur placeat est iusto expedita reiciendis! Libero reprehenderit, atque totam quo dolores vitae.</p>
          </div>
          <h2>Retours</h2>
          <div className="returns-section1">
            <h4>Frais de retour</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus, labore accusantium, sed, odit excepturi facilis dolor quisquam consectetur expedita temporibus eveniet? Cumque modi doloremque fuga optio facilis. Aliquid, doloribus.</p>
          </div>

          <div className="returns-section2">
            <h4>Retours sous 30 jours</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum itaque enim unde saepe sapiente veniam dolorem quaerat sit tenetur atque et odit a, debitis necessitatibus earum eveniet! Quae alias delectus unde voluptate sint dignissimos?</p>
          </div>

          <div className="returns-section3">
            <h4>Retours et échanges</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique exercitationem molestias esse, temporibus debitis expedita architecto eos impedit assumenda pariatur adipisci obcaecati quasi fugiat illo delectus sequi non at! Explicabo deserunt exercitationem accusamus aliquid.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Envois;
