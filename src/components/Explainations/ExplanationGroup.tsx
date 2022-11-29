import Explanation from "./Explanation";
import "./ExplanationGroup.css";

const explanations = ["1"];

function ExplanationGroup() {
  return (
    <div className="explanation_groups">
      <h1>EXPLAINATIONS FOR EXPLANATION GROUP:</h1>
      {explanations.map((explanation) => (
        <Explanation />
      ))}
    </div>
  );
}

export default ExplanationGroup;
