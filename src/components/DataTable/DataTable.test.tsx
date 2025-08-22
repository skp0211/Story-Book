import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataTable, type Column } from "./DataTable";

// ✅ Explicitly type columns
const columns: Column<{ id: number; name: string }>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
];

const data = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];

describe("DataTable", () => {
  it("renders and sorts", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();

    const header = screen.getByText("Name");
    fireEvent.click(header); // simulate sort
    fireEvent.click(header); // simulate reverse sort
  });

  it("handles search functionality", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        searchKey="name"
      />
    );

    const searchInput = screen.getByPlaceholderText("Search by name...");
    fireEvent.change(searchInput, { target: { value: "Alice" } });
    
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });
});
