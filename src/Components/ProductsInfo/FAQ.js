import "./FAQ.css";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { customerQ_AnsData } from "../../Shared/Constants";
export default function FAQ() {
  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: "5px", marginTop: "15px" }}>
        Customers question and answers
      </h1>
      {customerQ_AnsData.map((value) => {
        const { votes, q, a, question, answer } = value;
        return (
          <div className="questionBox">
            <div className="votes">
              <VscTriangleUp id="vscTri" />
              <h3>0</h3>
              <h3>{votes}</h3>
              <VscTriangleDown id="vscTri" />
            </div>
            <div className="Q-A">
              <h3>{q}</h3>
              <h3>{a}</h3>
            </div>
            <div className="question-Ans">
              <h4>{question}</h4>
              <h3>{answer}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
