import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { projects } from "../db";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = projects.find((project) => project.id === parseInt(id));

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!item) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container p-5 text-start">
      <div className="row">
        <div className="col ">
          <h2 className="border-bottom pb-2">
            <img src={item.thumbnail} alt="Project" /> {item.title}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={item.img} alt="Portrait" />
        </div>
      </div>
      <div className="row">
        <div className="col pb-2 border-bottom">
          <p className="py-3 px-2">{item.description}</p>
          <a href={item.urlProject} className="btn btn-primary my-2">
            Voir project online{" "}
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col px-2 py-5">
          {item.mainTools.map((tool, i) => (
            <span className="p-2" key={i}>
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {item.technicalDetails.map((item, i) => (
            <div key={i}>
              <h5>
                <i className="bi bi-gear-wide-connected"></i> - {item.title}
              </h5>
              {Array.isArray(item.description) ? (
                <ul>
                  {item.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default ProjectDetail;
