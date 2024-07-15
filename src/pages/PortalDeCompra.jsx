import React, { useState } from "react";
import { Link } from "react-router-dom";

const PurchasePortal = () => {
  const [currentPage, setCurrentPage] = useState("dev");

  const renderPage = () => {
    switch (currentPage) {
      case "dev":
        return (
          <section id="dev" className="p-5">
            <div className="container-fluid">
              <h2 className="text-gradient p-2">Development</h2>
              <p className="px-3">If the errors are difficult, get help to solve them.</p>
              <ol>
                <li>Introduction to HTML</li>
                <li>Styling with CSS</li>
                <li>Interactivity with JavaScript</li>
                <li>Best practices and optimization</li>
                <li>Website deployment</li>
              </ol>
              <Link to="/calender" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">
                Reserve a consultation
              </Link>
              <button className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">
                Consultation pack
              </button>
              <br />
              <a href="#learn-more">Learn more</a>
            </div>
            <div class="accordion p-4" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ¿A quién van dirigidas estas asesorías?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Estas asesorías están dirigidas a desarrolladores novatos,
                    intermedios y cualquier persona interesada en aprender
                    desarrollo web.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Cuánto tiempo durará la Asesoría y qué pasa si me tardo?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    La asesoría usualmente dura una hora. Si necesitas más
                    tiempo, podemos extender la sesión según sea necesario.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Puedo obtener una grabación de la Asesoría?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Sí, podemos grabar la sesión y enviártela después de la
                    asesoría.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    ¿Necesito compartir mi código contigo para que hagas
                    modificaciones?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    No es necesario que compartas tu código. Podemos trabajar
                    juntos en tiempo real para realizar las modificaciones
                    necesarias.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    ¿A través de qué plataforma nos conectaremos?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Utilizamos Zoom para las sesiones. Te enviaremos el enlace
                    de acceso una vez confirmada tu cita.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    ¿Qué lenguajes de programación manejas?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Manejo HTML, CSS, JavaScript, y también frameworks como
                    React y Vue.js.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    ¿Es posible que me asesores con la creación de proyectos?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Sí, podemos asesorarte en la creación de proyectos desde
                    cero, ayudándote con la planificación, desarrollo y
                    despliegue.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    ¿Qué métodos de pagos aceptas?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Aceptamos pagos mediante tarjetas de crédito, PayPal y
                    transferencia bancaria.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    ¿Qué pasa si no puedo asistir a la asesoría?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Si no puedes asistir, por favor avísanos con al menos 24
                    horas de anticipación para reprogramar tu sesión.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTen">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    ¿Hay una confirmación, una vez que reservo una cita?
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Sí, recibirás un correo de confirmación con todos los
                    detalles de la cita.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEleven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                  >
                    ¿Cuando voy a escoger la hora en el calendario, este muestra
                    mi zona horaria?
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEleven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Sí, el calendario muestra tu zona horaria para que puedas
                    seleccionar la hora adecuada.
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case "fit":
        return (
          <section id="fit" style={{ padding: "20px" }}>
            <h2>Fitness</h2>
            <p>
              Find products and consultations on fitness and physical
              well-being.
            </p>
            <button>Reserve a consultation</button>
            <button>Consultation pack</button>
            <br />
            <a href="#learn-more">Learn more</a>

            <div className="faq">
              <h3>Frequently Asked Questions (FAQs)</h3>
              <dl>
                <dt>¿A quién van dirigidas estas asesorías?</dt>
                <dd>
                  Estas asesorías están dirigidas a personas interesadas en
                  mejorar su bienestar físico y adoptar un estilo de vida
                  saludable.
                </dd>

                <dt>
                  ¿Cuánto tiempo durará la Asesoría y qué pasa si me tardo?
                </dt>
                <dd>
                  La asesoría usualmente dura 45 minutos. Si necesitas más
                  tiempo, podemos extender la sesión según sea necesario.
                </dd>

                <dt>¿Puedo obtener una grabación de la Asesoría?</dt>
                <dd>
                  Sí, podemos grabar la sesión y enviártela después de la
                  asesoría.
                </dd>

                <dt>
                  ¿Necesito compartir mi rutina de ejercicios contigo para que
                  hagas modificaciones?
                </dt>
                <dd>
                  No es necesario que compartas tu rutina. Podemos revisar y
                  ajustar tu plan de ejercicios durante la sesión.
                </dd>

                <dt>¿A través de qué plataforma nos conectaremos?</dt>
                <dd>
                  Utilizamos Zoom para las sesiones. Te enviaremos el enlace de
                  acceso una vez confirmada tu cita.
                </dd>

                <dt>¿Qué tipos de entrenamiento manejas?</dt>
                <dd>
                  Manejo entrenamiento de fuerza, cardio, yoga y pilates.
                  También podemos trabajar en planes personalizados de acuerdo a
                  tus objetivos.
                </dd>

                <dt>
                  ¿Es posible que me asesores con la creación de un plan de
                  entrenamiento?
                </dt>
                <dd>
                  Sí, podemos asesorarte en la creación de un plan de
                  entrenamiento personalizado que se ajuste a tus necesidades y
                  metas.
                </dd>

                <dt>¿Qué métodos de pagos aceptas?</dt>
                <dd>
                  Aceptamos pagos mediante tarjetas de crédito, PayPal y
                  transferencia bancaria.
                </dd>

                <dt>¿Qué pasa si no puedo asistir a la asesoría?</dt>
                <dd>
                  Si no puedes asistir, por favor avísanos con al menos 24 horas
                  de anticipación para reprogramar tu sesión.
                </dd>

                <dt>¿Hay una confirmación, una vez que reservo una cita?</dt>
                <dd>
                  Sí, recibirás un correo de confirmación con todos los detalles
                  de la cita.
                </dd>

                <dt>
                  ¿Cuando voy a escoger la hora en el calendario, este muestra
                  mi zona horaria?
                </dt>
                <dd>
                  Sí, el calendario muestra tu zona horaria para que puedas
                  seleccionar la hora adecuada.
                </dd>
              </dl>
            </div>
          </section>
        );
      case "hire-me":
        return (
          <section id="hire-me" style={{ padding: "20px" }}>
            <h2>Hire Me</h2>
            <p>
              If you are interested in hiring me, please fill out the following
              form:
            </p>
            <button>Reserve a consultation</button>
            <button>Consultation pack</button>
            <br />
            <a href="#learn-more">Learn more</a>

            <div className="faq">
              <h3>Frequently Asked Questions (FAQs)</h3>
              <dl>
                <dt>¿A quién van dirigidas estas asesorías?</dt>
                <dd>
                  Estas asesorías están dirigidas a empresas y particulares que
                  buscan desarrollar soluciones digitales y asesoramiento en
                  tecnología.
                </dd>

                <dt>
                  ¿Cuánto tiempo durará la Asesoría y qué pasa si me tardo?
                </dt>
                <dd>
                  La asesoría usualmente dura 1 hora. Si necesitas más tiempo,
                  podemos extender la sesión según sea necesario.
                </dd>

                <dt>¿Puedo obtener una grabación de la Asesoría?</dt>
                <dd>
                  Sí, podemos grabar la sesión y enviártela después de la
                  asesoría.
                </dd>

                <dt>
                  ¿Necesito compartir mi código contigo para que hagas
                  modificaciones?
                </dt>
                <dd>
                  No es necesario que compartas tu código. Podemos trabajar
                  juntos en tiempo real para realizar las modificaciones
                  necesarias.
                </dd>

                <dt>¿A través de qué plataforma nos conectaremos?</dt>
                <dd>
                  Utilizamos Zoom para las sesiones. Te enviaremos el enlace de
                  acceso una vez confirmada tu cita.
                </dd>

                <dt>¿Qué lenguajes de programación manejas?</dt>
                <dd>
                  Manejo HTML, CSS, JavaScript, y también frameworks como React
                  y Vue.js.
                </dd>

                <dt>
                  ¿Es posible que me asesores con la creación de proyectos?
                </dt>
                <dd>
                  Sí, podemos asesorarte en la creación de proyectos desde cero,
                  ayudándote con la planificación, desarrollo y despliegue.
                </dd>

                <dt>¿Qué métodos de pagos aceptas?</dt>
                <dd>
                  Aceptamos pagos mediante tarjetas de crédito, PayPal y
                  transferencia bancaria.
                </dd>

                <dt>¿Qué pasa si no puedo asistir a la asesoría?</dt>
                <dd>
                  Si no puedes asistir, por favor avísanos con al menos 24 horas
                  de anticipación para reprogramar tu sesión.
                </dd>

                <dt>¿Hay una confirmación, una vez que reservo una cita?</dt>
                <dd>
                  Sí, recibirás un correo de confirmación con todos los detalles
                  de la cita.
                </dd>

                <dt>
                  ¿Cuando voy a escoger la hora en el calendario, este muestra
                  mi zona horaria?
                </dt>
                <dd>
                  Sí, el calendario muestra tu zona horaria para que puedas
                  seleccionar la hora adecuada.
                </dd>
              </dl>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="mx-5">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage("dev")}>
              Development
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage("fit")}>
              Fitness
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage("hire-me")}
            >
              Hire me
            </button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </>
  );
};

export default PurchasePortal;
