import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import EvaluateTopicList from "./pages/EvaluateTopicList";
import Evaluate from "./pages/Evaluate";
import EvaluateEdit from "./pages/EvaluateEdit";
import EvaluatePresentationList from "./pages/EvaluatePresentationList";
import EvaluatePresentation from "./pages/EvaluatePresentation";
import EvaluatePresentationEdit from "./pages/EvaluatePresentationEdit";
import Footer from "./Home/Footer";
const App = () => {
  return (
    <Router>
      <Container>
        <Route path="/evaList" component={EvaluateTopicList} />
        <Route path="/addEva/:name" component={Evaluate} />
        <Route path="/editEva/:id" component={EvaluateEdit} />
        <Route path="/preList" component={EvaluatePresentationList} />
        <Route path="/addEvaPre/:name" component={EvaluatePresentation} />
        <Route path="/editEvaPre/:id" component={EvaluatePresentationEdit} />
      </Container>
      <br />
      <br />
      <Footer />
    </Router>
  );
};

export default App;
