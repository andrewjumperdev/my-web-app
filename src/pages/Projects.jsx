import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../db";

const Projects = () => {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    return () => {
      setShowFullText(false)
    };
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
              {projects.map((item, index) => (
                <div className="col-sm-12 col-md-10 col-xl-9 col-xxl-8 overflow-y-hidden">
                <div key={index} className="card shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="mt-5">
                        <h2 className="fw-bolder">{item.title}</h2>
                        <p>
                          {showFullText
                            ? item.description
                            : item.description.slice(0, 300) + '...'
                          }
                        </p>
                      </div>
                      <img
                        className="img-fluid my-2"
                        src={item.thumbnail}
                        alt="Project"
                      />
                    </div>
                  </div>
                  <Link className="btn btn-primary" to={`/projects/${item.id}`} >Voir détails</Link>
                </div>
                </div>
              ))}
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
              href="/contact"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
