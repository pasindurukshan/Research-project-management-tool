import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import EvaluateTopicList from "./pages/EvaluateTopicList";
import Evaluate from "./pages/Evaluate";
import EvaluateEdit from "./pages/EvaluateEdit";
import EvaluatePresentationList from "./pages/EvaluatePresentationList";
import EvaluatePresentation from "./pages/EvaluatePresentation";
import EvaluatePresentationEdit from "./pages/EvaluatePresentationEdit";
import AddPanel from "./pages/AddPanel";
import AddPanelList from "./pages/AddPanelList";
import AddPanelPresent from "./pages/AddPanelPresent";
import AddPanelPresentList from "./pages/AddPanelPresentList";
import PanelDash from "./pages/PanelDash";
import TopicLIst from "./pages/TopicList";
import PresentationList from "./pages/PresentationList";

import EvalTopicList from "./pages/EvalTopicList";
import Adminpage from "./pages/Adminpage";
import EvaTopicList from "./pages/EvaTopicList";

const App = () => {
  return (
    <Router>
      <Container>
        <Route path="/Dash" component={PanelDash} />
        <Route path="/toplist" component={TopicLIst} />
        <Route path="/preslist" component={PresentationList} />
        <Route path="/evaList" component={EvaluateTopicList} />
        <Route path="/addEva/:id" component={Evaluate} />
        <Route path="/editEva/:id" component={EvaluateEdit} />
        <Route path="/preList" component={EvaluatePresentationList} />
        <Route path="/addEvaPre/:id" component={EvaluatePresentation} />
        <Route path="/editEvaPre/:id" component={EvaluatePresentationEdit} />
        <Route path="/addPanel/:id" component={AddPanel} />
        <Route path="/panelList/" component={AddPanelList} />
        <Route path="/addPPanel/:id" component={AddPanelPresent} />
        <Route path="/pPanelList/" component={AddPanelPresentList} />

        <Route path="/evaListt" component={EvalTopicList} />
        <Route path="/evatopList" component={EvaTopicList} />

        <Route path="/" component={Adminpage} exact />
      </Container>
    </Router>
  );
};

export default App;
