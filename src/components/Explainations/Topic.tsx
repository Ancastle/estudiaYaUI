import ExplanationGroup from "./ExplanationGroup";

import "./Topic.css";

const explanationGroups = ["1"];

function Topic() {
  return (
    <div className="topic">
      <h1>EXPLANATION GROUPS FOR TOPIC:</h1>
      {explanationGroups.map((explanationGroup) => (
        <ExplanationGroup />
      ))}
    </div>
  );
}

export default Topic;
