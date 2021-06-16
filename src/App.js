import "./styles.css";
import { CountProvider } from "./count-context";
import { CountDisplay, Counter } from "./count";

export default function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}
