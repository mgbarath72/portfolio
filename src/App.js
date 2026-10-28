import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BarathPortfolio from "./BarathPortfolio";
import { NotFound, ScrollManager, SiteFooter, SiteHeader } from "./Layout";
import ProjectPage from "./ProjectPage";
import ProjectsPage from "./ProjectsPage";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollManager />
      <div className="site-shell" id="top">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<BarathPortfolio />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
