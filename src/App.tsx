import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ui/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
