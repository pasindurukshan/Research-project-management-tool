import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PanelDash = () => {
  return (
    <div class="card text-center">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">Evaluate Topic Area</h5>
        <p class="card-text"></p>

        <Link to={"/evaList/"}>
          <Button data-inline="true" variant="dark">
            Evaluate Topics
          </Button>
        </Link>
      </div>
      <div class="card-footer text-muted">@ Panel Member</div>
      <br />
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Evaluate Presentation Area</h5>
        <p class="card-text"></p>
        <Link to={"/preList/"}>
          <Button data-inline="true" variant="dark">
            Evaluate Presentations
          </Button>
        </Link>
      </div>
      <div class="card-footer text-muted">@ Panel Member</div>
    </div>
  );
};

export default PanelDash;
