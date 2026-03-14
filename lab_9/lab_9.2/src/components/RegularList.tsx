import { useMemo, useState } from "react";
import { generateItems } from "../utils/generateItems";

interface RegularListProps {
  itemCount?: number;
}

export function RegularList({ itemCount = 10000 }: RegularListProps) {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => {
    console.time("Generate regular items");
    const generated = generateItems(itemCount);
    console.timeEnd("Generate regular items");
    return generated;
  }, [itemCount]);

  const filteredItems = useMemo(() => {
    console.time("Filter regular items");

    const result = !filter
      ? items
      : items.filter(
          (item) =>
            item.title.toLowerCase().includes(filter.toLowerCase()) ||
            item.category.toLowerCase().includes(filter.toLowerCase())
        );

    console.timeEnd("Filter regular items");
    return result;
  }, [items, filter]);

  console.log("RegularList render");

  return (
    <div
      style={{
        border: "2px solid #16a34a",
        borderRadius: "12px",
        padding: "16px",
        marginTop: "20px",
        background: "#f6fff8",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Regular List</h2>

      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />

      <div style={{ marginBottom: "12px", fontSize: "14px", color: "#444" }}>
        Showing {filteredItems.length} of {items.length} items
      </div>

      <div
        style={{
          height: "500px",
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "12px",
              borderBottom: "1px solid #eee",
            }}
          >
            <h4 style={{ margin: "0 0 6px 0" }}>{item.title}</h4>
            <p style={{ margin: "0 0 6px 0", fontSize: "14px" }}>
              {item.description}
            </p>
            <span
              style={{
                fontSize: "12px",
                color: "#555",
                background: "#f3f3f3",
                padding: "4px 8px",
                borderRadius: "8px",
              }}
            >
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}