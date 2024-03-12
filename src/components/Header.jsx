import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const[text, setText] = useState('');
  
  useEffect(() => {
    const changeText = (index) => {
      const texts = ['Andrew', 'Développeur Web']; 
      setText(texts[index % texts.length]);
      setTimeout(() => {
        changeText(index + 1);
      }, 4000);
    };
    changeText(0);
  }, []);

  return (
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-md-6 col-lg-7">
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">
                    Javascript &middot; React &middot; Node
                  </div>
                </div>
                <h1 className="overflow-hidden text-start display-3 fw-bolder mb-5">
                  <span className="container__text">
                    <span className="text first-text">Je suis </span> <br/>
                    <span className="text sec-text">{text}</span>
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    to="/resume"
                  >
                    Resume
                  </Link>
                  <Link
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-sm-12">
              <div className="d-flex justify-content-center align-items-end mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary overflow-hidden d-flex align-items-end">
                  <img src="/img/Foto.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
