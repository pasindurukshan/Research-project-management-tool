import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import EvaluateTopicList from "./pages/EvaluateTopicList";
import Evaluate from "./pages/Evaluate";

const App = () => {
  return (
    <Router>
      <Container>
        <Route path="/evaList" component={EvaluateTopicList} />
        <Route path="/addEva" component={Evaluate} />
      </Container>
    </Router>
  );
};

export default App;
