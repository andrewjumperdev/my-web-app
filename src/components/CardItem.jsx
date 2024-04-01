import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    return () => {
      setShowFullText(false);
    };
  }, []);

  const prjctCard = props.items.map((item, index) => (
    <div className={`${props.col}`}>
      <div key={index} className="card shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
          <div className="d-flex align-items-center">
            <div className="mt-5">
              <h2 className="fw-bolder">{item.title}</h2>
              <p>
                {showFullText
                  ? item.description
                  : item.description.slice(0, 300) + "..."}
              </p>
            </div>
            <img
              className="img-fluid my-2"
              src={item.thumbnail}
              alt="Project"
            />
          </div>
        </div>
        <Link className="btn btn-primary" to={`/projects/${item.id}`}>
          Voir détails
        </Link>
      </div>
    </div>
  ));

  return <> {prjctCard} </>;
};

export default CardItem;
