import React from "react";
import { useParams } from "react-router";

const ProjectDetail = ({ data }) => {
  console.log(data)
  const { id } = useParams();
  const item = data.find((project) => project.id == id);
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
    </div>
  );
};

export default ProjectDetail;
