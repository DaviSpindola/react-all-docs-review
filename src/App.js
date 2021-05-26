import AddSection from "./AddSection";
import RefComponent from "./RefComponent";
import "./styles.css";
import UseEffectComponent from "./UseEffectComponent";

export default function App() {
  return (
    <div className="App">
      <h5>Hello CodeSandbox</h5>
      <AddSection title="Using Refs">
        <RefComponent />
      </AddSection>
      <AddSection title="Using Effects">
        <UseEffectComponent />
      </AddSection>
    </div>
  );
}
