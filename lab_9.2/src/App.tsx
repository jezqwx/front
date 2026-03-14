import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Lab 9.2 - Virtualization for Large Lists</h1>
      <p>
        This project compares a virtualized list with a regular non-virtualized
        list using 10,000 items.
      </p>

      <VirtualList itemCount={10000} height={500} />
      <RegularList itemCount={10000} />
    </div>
  );
}

export default App;