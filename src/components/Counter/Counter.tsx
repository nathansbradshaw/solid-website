import { createSignal } from "solid-js";
import "./Counter.css";
const [count, setCount] = createSignal(1);

export default function Counter() {
  return (
    <button
      class="text-3xl font-bold underline"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
