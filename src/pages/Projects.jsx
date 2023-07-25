import React from "react";
import { Link } from "react-router-dom";

const projectsInfo = [
  {
    id: 1,
    title: "Site e-commerce Kanap",
    description: `L'application web comprend 4 pages : Accueil, Produit, Panier et Confirmation. 
                  La page d'accueil affiche tous les articles disponibles. La page Produit permet 
                  aux utilisateurs de personnaliser et d'ajouter des produits au panier. La page
                   Panier permet de modifier la quantité des produits et de supprimer des articles. 
                  Les saisies des utilisateurs sont validées et affichent des messages d'erreur 
                  en cas de problème. La page Confirmation affiche un message de remerciement et 
                  l'identifiant de commande. Le code source doit être bien structuré et utiliser 
                  des fonctions réutilisables. L'API utilise des promesses et ne prend pas encore 
                  en compte la quantité et la couleur des produits. Les produits dans le panier 
                  sont regroupés par modèle et couleur.`,
    thumbnail: "https://dummyimage.com/300x400/343a40/6c757d",
  },
  {
    id: 2,
    title: "Site e-commerce Kanap",
    description: `Piiquante est une application web dédiée à la création de sauces épicées avec des recettes secrètes. Son objectif est de générer plus de buzz en permettant aux utilisateurs d'ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par d'autres. L'application propose des fonctionnalités telles que l'authentification des utilisateurs, la visualisation des sauces existantes, l'ajout de nouvelles sauces avec des images, la mise à jour des sauces existantes, ainsi que la possibilité de liker et disliker les sauces. Les mots de passe des utilisateurs sont sécurisés grâce à un hachage, et l'accès aux routes de sauce requiert une authentification appropriée. Les adresses électroniques sont uniques pour assurer l'unicité des utilisateurs, et les erreurs de base de données sont gérées grâce à un plugin Mongoose. Le projet est sous licence MIT, encourage les contributions et respecte les normes de sécurité actuelles.`,
    thumbnail: "./piiquante.png",
  },
];

const Projects = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {projectsInfo.map((item) => (
                <Link className="nav-link" to={`/projects/:${item.id}`} >
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                      <img
                        className="img-fluid"
                        src={item.thumbnail}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <a
              className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
              href="contact.html"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
