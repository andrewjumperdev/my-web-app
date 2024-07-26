import React, { useState } from "react";
import { Link } from "react-router-dom";

const PurchasePortal = () => {
  const [currentPage, setCurrentPage] = useState("dev");

  const renderPage = () => {
    switch (currentPage) {
      case "dev":
        return (
          <section id="dev" className="">
            <div className="container-fluid">
              <h2 className="text-gradient p-2">Development</h2>
              <p className="px-3">
                If the errors are difficult, get help to solve them.
              </p>
              <ol>
                <li>Introduction to HTML</li>
                <li>Styling with CSS</li>
                <li>Interactivity with JavaScript</li>
                <li>Best practices and optimization</li>
                <li>Website deployment</li>
              </ol>
              <Link
                to="/calender"
                className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
              >
                Reserve a consultation
              </Link>
            </div>
            <div className="accordion p-2" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
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
                  className="accordion-collapse collapse show"
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    La asesoría usualmente dura una hora. Si necesitas más
                    tiempo, podemos extender la sesión según sea necesario.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Sí, podemos grabar la sesión y enviártela después de la
                    asesoría.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Utilizamos Zoom para las sesiones. Te enviaremos el enlace
                    de acceso una vez confirmada tu cita.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Manejo HTML, CSS, JavaScript, y también frameworks como
                    React y Vue.js.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Aceptamos pagos mediante tarjetas de crédito, PayPal y
                    transferencia bancaria.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Si no puedes asistir, por favor avísanos con al menos 24
                    horas de anticipación para reprogramar tu sesión.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Sí, recibirás un correo de confirmación con todos los
                    detalles de la cita.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEleven">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
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
          <section id="fit" className="">
            <div className="container-fluid">
              <h2 className="text-gradient p-2">Fitness</h2>
              <p className="py-3">
                Find products and consultations on fitness and physical
                well-being.
              </p>
              <button className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">
                Reserve a consultation
              </button>
            </div>
            <br />
            <div className="faq">
              <div class="container-fluid">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
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
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Estas asesorías están dirigidas a personas interesadas
                        en mejorar su bienestar físico y adoptar un estilo de
                        vida saludable.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        ¿Cuánto tiempo durará la Asesoría y qué pasa si me
                        tardo?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        La asesoría usualmente dura 45 minutos. Si necesitas más
                        tiempo, podemos extender la sesión según sea necesario.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sí, podemos grabar la sesión y enviártela después de la
                        asesoría.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        ¿Necesito compartir mi rutina de ejercicios contigo para
                        que hagas modificaciones?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        No es necesario que compartas tu rutina. Podemos revisar
                        y ajustar tu plan de ejercicios durante la sesión.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Utilizamos Zoom para las sesiones. Te enviaremos el
                        enlace de acceso una vez confirmada tu cita.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        ¿Qué tipos de entrenamiento manejas?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Manejo entrenamiento de fuerza, cardio, yoga y pilates.
                        También podemos trabajar en planes personalizados de
                        acuerdo a tus objetivos.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        ¿Es posible que me asesores con la creación de un plan
                        de entrenamiento?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sí, podemos asesorarte en la creación de un plan de
                        entrenamiento personalizado que se ajuste a tus
                        necesidades y metas.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Aceptamos pagos mediante tarjetas de crédito, PayPal y
                        transferencia bancaria.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Si no puedes asistir, por favor avísanos con al menos 24
                        horas de anticipación para reprogramar tu sesión.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sí, recibirás un correo de confirmación con todos los
                        detalles de la cita.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseEleven"
                      >
                        ¿Cuando voy a escoger la hora en el calendario, este
                        muestra mi zona horaria?
                      </button>
                    </h2>
                    <div
                      id="collapseEleven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEleven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sí, el calendario muestra tu zona horaria para que
                        puedas seleccionar la hora adecuada.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case "hire-me":
        return (
          <section id="hire-me" className="">
            <div className="container-fluid">
            <h2 className="text-gradient p-2">Hire Me</h2>
            <p className="py-3">
              If you are interested in hiring me, please fill out the following
              form:
            </p>
            <button className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Reserve a consultation</button>
            <br />
            </div>
            <div className="container-fluid mt-4">
            <div className="accordion" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne2">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne2"
                    aria-expanded="true"
                    aria-controls="collapseOne2"
                  >
                    ¿A quién van dirigidas estas asesorías?
                  </button>
                </h2>
                <div
                  id="collapseOne2"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Estas asesorías están dirigidas a empresas y particulares
                    que buscan desarrollar soluciones digitales y asesoramiento
                    en tecnología.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo2"
                    aria-expanded="false"
                    aria-controls="collapseTwo2"
                  >
                    ¿Cuánto tiempo durará la Asesoría y qué pasa si me tardo?
                  </button>
                </h2>
                <div
                  id="collapseTwo2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    La asesoría usualmente dura 1 hora. Si necesitas más tiempo,
                    podemos extender la sesión según sea necesario.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree2"
                    aria-expanded="false"
                    aria-controls="collapseThree2"
                  >
                    ¿Puedo obtener una grabación de la Asesoría?
                  </button>
                </h2>
                <div
                  id="collapseThree2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Sí, podemos grabar la sesión y enviártela después de la
                    asesoría.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour2"
                    aria-expanded="false"
                    aria-controls="collapseFour2"
                  >
                    ¿Necesito compartir mi código contigo para que hagas
                    modificaciones?
                  </button>
                </h2>
                <div
                  id="collapseFour2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    No es necesario que compartas tu código. Podemos trabajar
                    juntos en tiempo real para realizar las modificaciones
                    necesarias.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive2"
                    aria-expanded="false"
                    aria-controls="collapseFive2"
                  >
                    ¿A través de qué plataforma nos conectaremos?
                  </button>
                </h2>
                <div
                  id="collapseFive2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Utilizamos Zoom para las sesiones. Te enviaremos el enlace
                    de acceso una vez confirmada tu cita.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix2"
                    aria-expanded="false"
                    aria-controls="collapseSix2"
                  >
                    ¿Qué lenguajes de programación manejas?
                  </button>
                </h2>
                <div
                  id="collapseSix2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Manejo HTML, CSS, JavaScript, y también frameworks como
                    React y Vue.js.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven2"
                    aria-expanded="false"
                    aria-controls="collapseSeven2"
                  >
                    ¿Es posible que me asesores con la creación de proyectos?
                  </button>
                </h2>
                <div
                  id="collapseSeven2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Sí, podemos asesorarte en la creación de proyectos desde
                    cero, ayudándote con la planificación, desarrollo y
                    despliegue.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight2"
                    aria-expanded="false"
                    aria-controls="collapseEight2"
                  >
                    ¿Qué métodos de pagos aceptas?
                  </button>
                </h2>
                <div
                  id="collapseEight2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Aceptamos pagos mediante tarjetas de crédito, PayPal y
                    transferencia bancaria.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine2"
                    aria-expanded="false"
                    aria-controls="collapseNine2"
                  >
                    ¿Qué pasa si no puedo asistir a la asesoría?
                  </button>
                </h2>
                <div
                  id="collapseNine2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Si no puedes asistir, por favor avísanos con al menos 24
                    horas de anticipación para reprogramar tu sesión.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen2"
                    aria-expanded="false"
                    aria-controls="collapseTen2"
                  >
                    ¿Hay una confirmación, una vez que reservo una cita?
                  </button>
                </h2>
                <div
                  id="collapseTen2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Sí, recibirás un correo de confirmación con todos los
                    detalles de la cita.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEleven2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven2"
                    aria-expanded="false"
                    aria-controls="collapseEleven2"
                  >
                    ¿Cuando voy a escoger la hora en el calendario, este muestra
                    mi zona horaria?
                  </button>
                </h2>
                <div
                  id="collapseEleven2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEleven2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    Sí, el calendario muestra tu zona horaria para que puedas
                    seleccionar la hora adecuada.
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (

      <div className="container">
        <ul className="container pagination">
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
        {renderPage()}
      </div>
  );
};

export default PurchasePortal;
