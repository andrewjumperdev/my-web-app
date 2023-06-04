import React from "react";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

const Projects = () => {
  return (
    <div>
        <Nav />
      <section class="py-5">
        <div class="container px-5 mb-5">
          <div class="text-center mb-5">
            <h1 class="display-5 fw-bolder mb-0">
              <span class="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-11 col-xl-9 col-xxl-8">
              <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div class="card-body p-0">
                  <div class="d-flex align-items-center">
                    <div class="p-5">
                      <h2 class="fw-bolder">Site e-commerce Kanap </h2>
                      <p>
                      L’application web sera composée de 4 pages : <br/>
                      ● Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à
                      la vente. <br/>
                      ● Une page “produit” qui affiche (de manière dynamique) les détails du produit sur
                      lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur
                      peut sélectionner une quantité, une couleur, et ajouter le produit à son panier. <br/>
                      ● Une page “panier”. Celle-ci contient plusieurs parties : <br/>
                      ○ Un résumé des produits dans le panier, le prix total et la possibilité de
                      modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.<br/>
                      ○ Un formulaire permettant de passer une commande. Les données du
                      formulaire doivent être correctes et bien formatées avant d'être renvoyées au
                      back-end. Par exemple, pas de chiffre dans un champ prénom.<br/>
                      ● Une page “confirmation” :<br/> 
                      ○ Un message de confirmation de commande, remerciant l'utilisateur pour sa
                      commande, et indiquant l'identifiant de commande envoyé par l’API. <br/>
                      </p>
                    </div>
                    <img
                      class="img-fluid"
                      src="https://dummyimage.com/300x400/343a40/6c757d"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div class="card overflow-hidden shadow rounded-4 border-0">
                <div class="card-body p-0">
                  <div class="d-flex align-items-center">
                    <div class="p-5">
                      <h2 class="fw-bolder">API</h2>
                      <p>
                      Contexte du projet <br />
                      Piiquante se dédie à la création de sauces épicées dont les recettes sont gardées
                      secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise
                      souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter
                      leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.
                      </p>
                    </div>
                    <img
                      class="img-fluid"
                      src="https://dummyimage.com/300x400/343a40/6c757d"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 bg-gradient-primary-to-secondary text-white">
        <div class="container px-5 my-5">
          <div class="text-center">
            <h2 class="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <a
              class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
              href="contact.html"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
