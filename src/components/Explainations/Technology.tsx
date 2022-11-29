import Topic from "./Topic";

import "./Technology.css";

const topics = ["1"];

function Technology() {
  return (
    <div className="technology">
      <h1>TOPICS FOR TECHONOLGY</h1>
      {topics.map((topic) => (
        <Topic />
      ))}
    </div>
  );
}

export default Technology;
