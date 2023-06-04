import React from "react";

const Header = () => {
  return (
    <>
      <header class="py-5">
        <div class="container px-5 pb-5">
          <div class="row gx-5 align-items-center">
            <div class="col-xxl-5">
              <div class="text-center text-xxl-start">
                <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div class="text-uppercase">
                    Javascript &middot; React &middot; Node
                  </div>
                </div>
                <h1 class="display-3 fw-bolder mb-5">
                  <span class="text-gradient d-inline">
                    Je suis Andrew et je suis Web Developer
                  </span>
                </h1>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a
                    class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    href="resume.html"
                  >
                    Resume
                  </a>
                  <a
                    class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    href="projects.html"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-6">
              <div class="d-flex justify-content-center mt-5 mt-xxl-0">
                <div class="profile bg-gradient-primary-to-secondary overflow-hidden">
                  <img src="./img/Foto.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
