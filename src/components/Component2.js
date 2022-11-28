import React from "react";
import "./Component2.scss";
import img from "../assets/Phishing-Attacks.gif";

const Component2 = () => {
  return (
    <div className="component2">
     
      <p className="phishing-description">
        This project scans the input URL and runs it through a few machine learning algorithms to 
        scan it and separate legitimate URLs from fake URLs. The input URL after being scanned is
        given a probability score (in the form of %). This probability score has a threshold of 70%.
        If the score is above 70%, then the URL is highly likely to lead to a phishing attempt.
        Whereas if the score is under 70%, the URL is more inclined to be safe.
      </p>
    </div>
  );
};

export default Component2;
