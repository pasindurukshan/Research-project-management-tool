import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import EvaluateTopicList from "./pages/EvaluateTopicList";
import Evaluate from "./pages/Evaluate";
import EvaluateEdit from "./pages/EvaluateEdit";

const App = () => {
  return (
    <Router>
      <Container>
        <Route path="/evaList" component={EvaluateTopicList} />
        <Route path="/addEva/:name" component={Evaluate} />
        <Route path="/editEva/:id" component={EvaluateEdit} />
      </Container>
    </Router>
  );
};

export default App;
