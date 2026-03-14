import React from "react";
import type { User } from "./types";
import UserCard from "./UserCard";

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 22 },
  { name: "Diana", email: "diana@mail.com", age: 28 },
  { name: "Eve", email: "eve@mail.com", age: 35 },
];

const SearchApp = () => {
  const [users] = React.useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    setFilteredUsers(
      users.filter((u) => u.name.toLowerCase().includes(term.toLowerCase()))
    );
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>User Search</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleClear}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ccc",
          }}
        >
          Clear
        </button>
      </div>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredUsers.map((u) => (
          <UserCard key={u.email} user={u}>
            <small style={{ color: "#555" }}>Found user</small>
          </UserCard>
        ))
      )}
    </div>
  );
};

export default SearchApp;
