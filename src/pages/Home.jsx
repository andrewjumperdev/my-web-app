import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
      <div className="d-flex flex-column">
        <main className="flex-shrink-0">
          <Header />
        </main>
        <div className="container py-5">
        <section id="servicios">
            <div className="px-4 mx-2">
                <h2 className="text-gradient">Mes Services</h2>
                <p>
                    En tant que développeur freelance et consultant, j'offre des services personnalisés pour répondre à vos besoins technologiques. Que vous ayez besoin de développement web, d'automatisation de processus ou de conseils en stratégie technologique, je suis là pour vous aider à atteindre vos objectifs.
                </p>
                <Link to="/services">En savoir plus</Link>
            </div>
        </section>
          </div>
      </div>
  );
};

export default Home;
