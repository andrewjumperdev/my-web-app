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
            path="/"
            element={
              <Layout>
                <PageTransition>
                  <Home />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <PageTransition>
                  <About />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="/resume"
            element={
              <Layout>
                <PageTransition>
                  <Resume />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                <PageTransition>
                  <Projects data={data} />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <Layout>
                <PageTransition>
                  <ProjectDetail data={data} />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <PageTransition>
                  <Contact />
                </PageTransition>
              </Layout>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
