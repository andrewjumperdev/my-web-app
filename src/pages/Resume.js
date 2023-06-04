import React from "react";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

const Resume = () => {
  return (
    <>
    <Nav />
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0">
          <span class="text-gradient d-inline">Resume</span>
        </h1>
      </div>
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h2 class="text-primary fw-bolder mb-0">Experience</h2>

              <a class="btn btn-primary px-4 py-3" href="#!">
                <div class="d-inline-block bi bi-download me-2"></div>
                Download Resume
              </a>
            </div>

            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">
                      juin 2022 - juin  2023 
                      </div>
                      <div class="small fw-bolder">Automatisation du Gestion de Flux Marketplace</div>
                      <div class="small text-muted">Bobochic Paris</div>
                      <div class="small text-muted">France, Paris</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                    Responsable de la gestion des flux entre les places de marché, de la visibilité des produits, de l'activation des nouveaux produits, de la correction des erreurs, de la création d'une logique de gestion des attributs, des stratégies d'injection, de la maintenance et de la visualisation des flux.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">2021</div>
                      <div class="small fw-bolder">Développeur Front-End</div>
                      <div class="small text-muted">ANTIT</div>
                      <div class="small text-muted">Costa Rica, San José</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                    Développer la conception d'un site en code HTML et CSS vers les bibliothèques React et React Native. Structurer le contenu de manière sémantique, assurer l'accessibilité, contrôler les polices, les modèles, les formulaires de conception et l'interactivité. Programmer, modifier et maintenir un site web. Adapter la conception d'un site web à différents appareils et navigateurs, créer des outils qui améliorent l'interaction entre l'utilisateur et le web, utiliser des API pour connecter le web avec des services et des systèmes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-secondary fw-bolder mb-4">Education</h2>

            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-secondary fw-bolder mb-2">
                      2022 - 2023
                      </div>
                      <div class="mb-2">
                        <div class="small fw-bolder">OpenClassroom</div>
                        <div class="small text-muted">Paris, France</div>
                      </div>
                      <div class="fst-italic">
                        <div class="small text-muted">Web Development</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                    Construire un site web responsive et dynamique s’adaptant à tout type d’écran grâce à l’intégration d'éléments des maquettes graphiques (développement front-end avec HTML, CSS, JavaScript et React)
Créer des API et des bases de données pour développer des sites complets et dynamiques et assurer le bon fonctionnement côté serveur (développement back-end avec NodeJS, Express et MongoDB).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-secondary fw-bolder mb-2">
                        2011 - 2015
                      </div>
                      <div class="mb-2">
                        <div class="small fw-bolder">ULA</div>
                        <div class="small text-muted">Los Angeles, CA</div>
                      </div>
                      <div class="fst-italic">
                        <div class="small text-muted">Undergraduate</div>
                        <div class="small text-muted">Computer Science</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="pb-5"></div>
          <section>
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="mb-5">
                  <div class="d-flex align-items-center mb-4">
                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i class="bi bi-tools"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">
                        Professional Skills
                      </span>
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        HTML5, CSS3 et JavaScript
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Frontend - React, React-Router, Redux
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Backend - NodeJs, ExpressJs, JWT, OWASP
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Bootstrap, Tailwind, Materialize, React-Bootstrap
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Maquetage User Interface 
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          MongoDB, SQL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Resume;
