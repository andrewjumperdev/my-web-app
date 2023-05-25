import React from "react";
import Header from "../layout/Header";
import Footer from "../components/Footer";

const Home = () => {
  return <div>
     <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <Header />
            <section class="bg-light py-5">
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-xxl-8">
                            <div class="text-center my-5">
                                <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
                                <p class="text-muted">Diplômé CCNA Cisco et Front-End développeur avec 2 ans d'expérience professionnelle dans le développement d'applications webs et mobiles avec les bibliothèques React, React Native et NodeJS. Entrepreneur, j'ai également créé ma TPE au Costa Rica et tout le système IT pour gérer Aqua Fun. Ambitieux et passionné, j'ai comme objectif de devenir Fullstack en France. Je suis également passionné par le développement de Machine Learning et le développement d'Arduino.</p>
                                <div class="d-flex justify-content-center fs-2 gap-4">
                                    <a class="text-gradient" href="#!"><i class="bi bi-twitter"></i></a>
                                    <a class="text-gradient" href="#!"><i class="bi bi-linkedin"></i></a>
                                    <a class="text-gradient" href="#!"><i class="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
        <Footer />
    </body>
  </div>;
};

export default Home;
