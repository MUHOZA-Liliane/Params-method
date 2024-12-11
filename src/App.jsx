
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditTask from "./assets/page/EditTask";
import Home from "./assets/page/Home";
import NotFound from "./assets/page/NotFound"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<EditTask />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;
