import { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List, type ListChildComponentProps } from "react-window";
import { generateItems } from "../utils/generateItems";
import type { Item } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

interface RowData {
  items: Item[];
}

function Row({ index, style, data }: ListChildComponentProps<RowData>) {
  const item = data.items[index];

  return (
    <div style={style}>
      <div
        style={{
          boxSizing: "border-box",
          padding: "12px",
          borderBottom: "1px solid #ddd",
          background: "#fff",
          height: "100%",
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
    </div>
  );
}

export function VirtualList({
  itemCount = 10000,
  height = 500,
}: VirtualListProps) {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
    },
    []
  );

  return (
    <div style={{ border: "2px solid #2563eb", borderRadius: "12px", padding: "16px", marginTop: "20px", background: "#f8fbff" }}>
      <h2 style={{ marginTop: 0 }}>Virtualized List</h2>

      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
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

      <List
        height={height}
        itemCount={filteredItems.length}
        itemSize={90}
        width="100%"
        itemData={{ items: filteredItems }}
      >
        {Row}
      </List>
    </div>
  );
}