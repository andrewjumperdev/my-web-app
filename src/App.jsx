import React, { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router";
import PageTransition from "./components/PageTransition";
import Layout from "./Layout";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import Spinner from "./components/Spinner";
import About from "./pages/About";

import { projects } from "./db";
import PageNotFound404 from "./pages/404";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const datosObtenidos = projects;
      setData(datosObtenidos);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            exact
            path="my-web-app/"
            element={
              <Layout>
                <PageTransition>
                  <Home />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="my-web-app/about"
            element={
              <Layout>
                <PageTransition>
                  <About />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="my-web-app/resume"
            element={
              <Layout>
                <PageTransition>
                  <Resume />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="my-web-app/projects"
            element={
              <Layout>
                <PageTransition>
                  <Projects data={data} />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="my-web-app/projects/:id"
            element={
              <Layout>
                <PageTransition>
                  <ProjectDetail data={data} />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="my-web-app/contact"
            element={
              <Layout>
                <PageTransition>
                  <Contact />
                </PageTransition>
              </Layout>
            }
          />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      )}
    </>
  );
}

export default App;
