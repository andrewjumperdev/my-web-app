import React, { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://us-central1-silver-origin-413715.cloudfunctions.net/submitContactForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error submitting form");
      }

      setIsSubmitted(true); // Marcar como enviado exitosamente

      // Limpiar los campos del formulario
      event.target.reset();

    } catch (error) {
      console.error("Error submitting form:", error);
      // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
    }
  };

  return (
    <section className="p-sm-0 md-py-5">
      <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">
              Let's work together!
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} id="contactForm">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name..."
                      required
                    />
                    <label htmlFor="name">Full name</label>
                    <div className="invalid-feedback">
                      A name is required.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback">
                      An email is required.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      required
                    />
                    <label htmlFor="phone">Phone number</label>
                    <div className="invalid-feedback">
                      A phone number is required.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Enter your message here..."
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback">
                      A message is required.
                    </div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <p className="lead fw-normal text-muted mb-0">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

