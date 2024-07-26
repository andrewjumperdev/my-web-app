import React from "react";

const About = () => {
  return (
    <section className="container bg-light">
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-sm-12">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">À propos de moi</span>
              </h2>
              <section id="sobre-mi">
                <div>
                <p>
                  Avec plus de 3 ans d'expérience en développement web, j'ai eu l'opportunité de travailler sur une variété de projets diversifiés, allant de la création d'interfaces utilisateur responsives à l'automatisation des processus métier. Mon parcours professionnel m'a permis de développer une expertise approfondie en gestion d'API et en optimisation des performances front-end. J'ai collaboré avec des équipes pluridisciplinaires pour concevoir et implémenter des solutions innovantes qui répondent aux besoins des utilisateurs finaux tout en respectant les meilleures pratiques du secteur.
                </p>
                <p>
                    Mon intérêt pour la technologie ne se limite pas à mon travail. Je suis passionné par l'apprentissage continu et je m'efforce de me tenir au courant des dernières tendances et avancées technologiques. J'ai suivi plusieurs cours en ligne et participé à des ateliers et des conférences pour perfectionner mes compétences et acquérir de nouvelles connaissances. Mon approche du développement est centrée sur l'utilisateur, en mettant l'accent sur la performance, l'accessibilité et la facilité d'utilisation.
                </p>
                <p>
                    En dehors du travail, j'aime partager mes connaissances avec la communauté. J'ai animé des ateliers de formation pour débutants en programmation et contribué à des projets open source. Ces expériences m'ont permis de développer mes compétences en communication et en mentorat, tout en me donnant la satisfaction de voir d'autres personnes progresser grâce à mon aide.
                </p>
                <p>
                    En résumé, je suis un développeur fullstack passionné par l'innovation technologique et la création d'expériences utilisateur exceptionnelles. Je suis constamment à la recherche de nouvelles opportunités pour innover et améliorer les produits numériques. Ma philosophie de travail repose sur la rigueur, la créativité et la collaboration pour offrir des solutions technologiques robustes et efficaces. Si vous cherchez un professionnel engagé et compétent pour vos projets de développement web, je serais ravi de discuter de comment je peux contribuer à votre succès.
                </p>
                </div>
            </section>
            <section>
              <div>
                  <h3 className="text-gradient">Éducation</h3>
                  <ul className="list-group">
                      <li className="list-group-item">Licence Développeur web - OpenClassroom, Paris</li>
                      <li className="list-group-item">Certification en développement web - Platzi, Costa Rica</li>
                      <li className="list-group-item">Ultime Python - Hola Mundo</li>
                      <li className="list-group-item">Formation en gestion de projets Agile - LinkedIn Learning</li>
                      <li className="list-group-item">Cisco CCNA - Infonet, Costa Rica</li>
                  </ul>
              </div>
          </section>
              <div className="mt-4 d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="https://twitter.com/jumper_Develop" target="_blanc">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="text-gradient" href="https://www.linkedin.com/in/andrew-jumper/" target="_blanc">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-gradient" href="https://github.com/andrewjumperdev" target="_blanc">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
