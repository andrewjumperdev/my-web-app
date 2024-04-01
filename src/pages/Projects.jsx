import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../db";
import CardItem from "../components/CardItem";

const Projects = () => {
  return (
    <>
      <section className="py-5">
        <div className="container mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="container">
          <div className="row gx-5 justify-content-center">
                <CardItem items={projects} className="col"/>
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
