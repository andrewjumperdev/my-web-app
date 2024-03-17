import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const fileUrl = "/my-web-app/CV-Andrew Alfaro.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Andrew-Alfaro-CV.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="container px-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Resume</span>
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="text-primary fw-bolder mb-0">Experience</h2>

              <button
                className="btn btn-primary px-4 py-3"
                onClick={handleDownload}
              >
                <div className="d-inline-block bi bi-download me-2"></div>
                Download Resume
              </button>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">
                        sept 4 2023 - aujourd’hui
                      </div>
                      <div className="small fw-bolder">
                        Full Stack Developer
                      </div>
                      <div className="small text-muted">wanhaofrance.com</div>
                      <div className="small text-muted">France, Paris</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      En tant que développeur Full Stack chez Wanhao France,
                      je suis responsable de la maintenance et du développement
                      front-end pour wanhaofrace.com, ainsi que du développement
                      back-end pour les Smart-Pads Yumi. Je veille également
                      à l'automatisation des processus administratifs,
                      contribuant ainsi à l'efficacité opérationnelle
                      de l'entreprise.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">
                        juin 2022 - juin 2023
                      </div>
                      <div className="small fw-bolder">
                        Automatisation du Gestion de Flux Marketplace
                      </div>
                      <div className="small text-muted">Bobochic Paris</div>
                      <div className="small text-muted">France, Paris</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Responsable de la gestion des flux entre les places de
                      marché, de la visibilité des produits, de l'activation des
                      nouveaux produits, de la correction des erreurs, de la
                      création d'une logique de gestion des attributs, des
                      stratégies d'injection, de la maintenance et de la
                      visualisation des flux.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">2021</div>
                      <div className="small fw-bolder">
                        Développeur Front-End
                      </div>
                      <div className="small text-muted">ANTIT</div>
                      <div className="small text-muted">
                        Costa Rica, San José
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Développer la conception d'un site en code HTML et CSS
                      vers les bibliothèques React et React Native. Structurer
                      le contenu de manière sémantique, assurer l'accessibilité,
                      contrôler les polices, les modèles, les formulaires de
                      conception et l'interactivité. Programmer, modifier et
                      maintenir un site web. Adapter la conception d'un site web
                      à différents appareils et navigateurs, créer des outils
                      qui améliorent l'interaction entre l'utilisateur et le
                      web, utiliser des API pour connecter le web avec des
                      services et des systèmes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-secondary fw-bolder mb-4">Education</h2>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">
                        2022 - 2023
                      </div>
                      <div className="mb-2">
                        <div className="small fw-bolder">OpenClassRooms</div>
                        <div className="small text-muted">Paris, France</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Web Development</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Construire un site web responsive et dynamique s’adaptant
                      à tout type d’écran grâce à l’intégration d'éléments des
                      maquettes graphiques (développement front-end avec HTML,
                      CSS, JavaScript et React) Créer des API et des bases de
                      données pour développer des sites complets et dynamiques
                      et assurer le bon fonctionnement côté serveur
                      (développement back-end avec NodeJS, Express et MongoDB).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">
                        2019 - 2021
                      </div>
                      <div className="mb-2">
                        <div className="small fw-bolder">Platzi</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Front-end</div>
                        <div className="small text-muted">JavaScript</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Une école en ligne dans laquelle j'ai fait une grande
                      partie de mon apprentissage en développement Front-end
                      connaissant HTML, CSS et JavaScript. J'ai réalisé des
                      projets avec Bootstrap, Tailwind, Matearialice. J'ai
                      utilisé Sass comme préprocesseur de design, React pour
                      créer l'interface utilisateur et Angular.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="pb-5"></div>
          <section>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-tools"></i>
                    </div>
                    <h3 className="fw-bolder mb-0">
                      <span className="text-gradient d-inline">
                        Professional Skills
                      </span>
                    </h3>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 mb-4">
                    <div className="col mb-4 mb-md-0">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        HTML5, CSS3 et JavaScript
                      </div>
                    </div>
                    <div className="col mb-4 mb-md-0">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Frontend - React, React-Router et Redux
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Backend - NodeJs, ExpressJs, JWT et OWASP
                      </div>
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4 mb-md-0">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Bootstrap, Tailwind, Materialize et React-Bootstrap
                      </div>
                    </div>
                    <div className="col mb-4 mb-md-0">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Maquetage User Interface
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        MongoDB, MySql et SQL
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
  );
};

export default Resume;
