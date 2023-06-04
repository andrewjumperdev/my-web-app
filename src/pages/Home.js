import React from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    
    <div>
        <Nav />
      <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
          <Header />
          <section class="bg-light py-5">
            <div class="container px-5">
              <div class="row gx-5 justify-content-center">
                <div class="col-xxl-8">
                  <div class="text-center my-5">
                    <h2 class="display-5 fw-bolder">
                      <span class="text-gradient d-inline">About Me</span>
                    </h2>
                    <p class="text-muted">
                      Je suis un développeur web résidant en France, et je
                      voudrais vous présenter ma carrière dans le domaine du
                      développement web. Mon parcours a débuté avec l'étude du
                      CCNA Routing and Switching, où j'ai acquis une solide
                      compréhension des réseaux informatiques. <br/> 

                      Cependant, ma passion pour la création de sites web m'a rapidement amené
                      à me tourner vers le développement front-end. J'ai
                      commencé par étudier HTML5 et CSS3, en apprenant les bases
                      de la création de pages d'atterrissage attrayantes et en
                      appliquant les bonnes pratiques de développement. J'ai
                      réalisé plusieurs projets personnels pour mettre en
                      pratique mes connaissances et améliorer mes compétences.
                      Par la suite, j'ai décidé d'explorer les préprocesseurs de
                      conception tels que Bootstrap, Tailwind et Materialize.
                      Ces outils m'ont permis de développer plus rapidement des
                      interfaces réactives et esthétiquement plaisantes. Pendant
                      cette période, j'ai également découvert JavaScript et
                      commencé à créer des projets plus dynamiques, tels que des
                      jeux cliquables et des animations parallaxe interactives. <br/> 
            
                      Toujours avide de progresser, j'ai ensuite étudié
                      différents frameworks tels que Angular et Vue.js.
                      Cependant, c'est avec React.js que j'ai trouvé une
                      bibliothèque qui correspondait parfaitement à mes besoins
                      en matière de développement d'interfaces utilisateur. Je
                      me suis plongé dans React.js et j'ai commencé à créer des
                      applications plus complexes. Par exemple, chez AquaFunCr,
                      j'ai développé une application CRUD en utilisant React,
                      qui était connectée à une REST API pour afficher les
                      événements sur notre site web. J'ai également utilisé
                      React pour créer une page de chargement et une application
                      avec React Native pour sauvegarder les données de nos
                      clients. Au fur et à mesure de ma carrière, j'ai suivi une
                      formation approfondie pour renforcer mes connaissances et
                      acquérir une base solide pour une croissance exponentielle
                      future. Pendant cette période, j'ai travaillé avec la pile
                      MERN (MongoDB, Express.js, React.js et Node.js), en
                      développant des REST APIs sécurisées avec des protocoles
                      de sécurité, des rôles d'utilisateurs et en suivant les
                      directives de sécurité telles que celles établies par
                      l'OWASP. J'ai également approfondi l'utilisation de jetons
                      pour maximiser la sécurité dans mes applications.  <br/> 
                      
                      Avec
                      React, j'ai continué à créer des projets quotidiens, en
                      explorant la gestion des états, les Hooks, le routing et
                      la création de composants réutilisables, afin d'appliquer
                      le principe "Don't Repeat Yourself". Enfin, j'ai
                      utilisé Python pour automatiser des tâches répétitives et
                      fastidieuses, afin de gagner du temps et de me concentrer
                      sur des tâches plus importantes. J'ai réalisé plusieurs
                      projets professionnels qui ont considérablement amélioré
                      l'efficacité de mon travail. Ma devise est de ne jamais
                      cesser d'apprendre, et je m'efforce d'améliorer mes
                      compétences en développement chaque jour. Je suis
                      constamment à la recherche de nouvelles technologies et de
                      nouvelles techniques pour rester à jour dans un domaine
                      qui évolue rapidement. Je suis passionné par la création
                      de solutions innovantes et je suis prêt à relever de
                      nouveaux défis pour contribuer au succès de projets web
                      passionnants.
                    </p>
                    <div class="d-flex justify-content-center fs-2 gap-4">
                      <a class="text-gradient" href="#!">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a class="text-gradient" href="#!">
                        <i class="bi bi-linkedin"></i>
                      </a>
                      <a class="text-gradient" href="#!">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </div>
  );
};

export default Home;
