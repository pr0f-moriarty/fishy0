import React from "react";
import "./Component3.scss";

const length_features = [
  "Length Of Url",
  "Length of Hostname",
  "Length Of Path",
  "Length Of Top Level Domain",
];
const Length_features = length_features.map((i) => {
  return (
    <li className="list" key={i.toString()}>
      {" "}
      {i}{" "}
    </li>
  );
});

const count_features = [
  "Count Of Letters and Digits ",
  "Count of Special Characters like (@,?,%,=) etc",
  "Count Of Number Of Directories",
];
const Count_features = count_features.map((i) => {
  return (
    <li className="list" key={i.toString()}>
      {" "}
      {i}{" "}
    </li>
  );
});

const binary_features = [
  "Use of IP or not in URL",
  "Use of URL Shortening or not",
];
const Binary_features = binary_features.map((i) => {
  return (
    <li className="list" key={i.toString()}>
      {" "}
      {i}{" "}
    </li>
  );
});

const Component3 = () => {
  return (
    <>
      <div className="component3" align="center">
        <h2 className="hdw"> Welcome</h2>

        <p className="hdw-para">
          Hi
        </p>
      </div>

      <div className="container">
        <div className="length-features">
          <h3 align="center"> Length Features </h3>
          <ul> {Length_features} </ul>
        </div>

        <div className="count-features">
          <h3 align="center"> Count Features </h3>
          <ul> {Count_features} </ul>
        </div>

        <div className="binary-features">
          <h3 align="center"> Binary Features </h3>
          <ul> {Binary_features} </ul>
        </div>
      </div>
    </>
  );
};

export default Component3;
