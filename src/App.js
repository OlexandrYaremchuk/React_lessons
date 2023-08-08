import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navigation/navbar";
import ReactStart from "./components/lessons/react-start";
import ReactHistory from "./components/info/react-history";
import ProjectTree from "./components/lessons/project_tree";
import Component from "./components/lessons/component";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <header className="App-header">
          <img
            src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png"
            alt="react icon"
            style={{ width: "2vw" }}
          />
          <h1>React v1.0</h1>
          <a href="https://uk.legacy.reactjs.org">
            React офіційна документація
          </a>
        </header>
        <div className="all-container">
          <div className="navContainer">
            <Navbar />
          </div>

          <main className="content-container">
            {/* <ReactStart /> */}

            <Routes>
              <Route path="react-history" element={<ReactHistory />} />
              <Route path="react_start" element={<ReactStart />} />
              <Route path="project_tree" element={<ProjectTree />} />
              <Route path="component_jsx" element={<Component />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
