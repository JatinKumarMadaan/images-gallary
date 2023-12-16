import React from "react";
import { Button } from "react-bootstrap";
//import { Jumbotron } from "https://react-bootstrap-v3.netlify.app/components/jumbotron/";
//import Jumbotron from "https://react-bootstrap-v4.netlify.app/components/jumbotron/";

const Welcome = () => (
  <div className="container, bg-secondary">
    <div className="bg-primary,text-black p-5 my-3">
      <h1>Images Gallery</h1>
      <p>
        This is simple application that retrieves photos using Unsplash API. In
        order to start enter any search term in the input field.
      </p>
      <p>
        <Button bsstyle="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  </div>
);

export default Welcome;
