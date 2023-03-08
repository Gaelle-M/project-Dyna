import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="blog">
            <Navigation />
            <div className="container">
                <div className="article1">
                    <div className="img-article1"></div>
                    <p>14/07/2022</p>
                    <h3>Bientôt disponible : notre toute nouvelle huile pour le visage vous fera resplendir.</h3>
                </div>

                <div className="article2">
                    <div className="img-article2"></div>
                    <p>02/07/2021</p>
                    <h3>Des conseils anti-âge issus des courants végan et bio.</h3>
                </div>

                <div className="article3">
                    <div className="img-article3"></div>
                    <p>26/06/2021</p>
                    <h3>Luttez contre la peau sèche en hiver.</h3>
                </div>

                <div className="article4">
                    <div className="img-article4"></div>
                    <p>02/07/2020</p>
                    <h3>L'histoire de nos huiles essentielles.</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;