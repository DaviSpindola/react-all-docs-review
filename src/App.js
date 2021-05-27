import "./styles.css"

import Section from "./components/Section"
import { NumericCounter } from "./useRef"
import { Timer } from "./useEffect"
import { RGBColorsManager } from "./useReducer"

export default function App() {
  return (
    <div>
      <Section title="Using Refs">
        <NumericCounter />
      </Section>
      <Section title="Using Effects">
        <Timer />
      </Section>
      <Section title="Using Reducer">
        <RGBColorsManager />
      </Section>
    </div>
  )
}
