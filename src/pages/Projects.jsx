import React, { useState } from "react";
import { Link } from "react-router-dom";

const Projects = ({data}) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div>
      <section className="py-5">
        <div className="container mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-12 col-xl-12 col-xxl-10  overflow-y-hidden">
              {data.map((item, index) => (
                <div key={index} className="card shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">{item.title}</h2>
                        <p>
                          {showFullText
                            ? item.description
                            : item.description.slice(0, 300)}
                          {item.description.length > 80 && !showFullText && (
                            <span>
                              ...{" "}
                              <Link to={`/projects/${item.id}`}>Leer más</Link>
                            </span>
                          )}
                        </p>
                      </div>
                      <img
                        className="img-fluid"
                        src={item.thumbnail}
                        alt="Project"
                      />
                    </div>
                  </div>
                </div>
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
