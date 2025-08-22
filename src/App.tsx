import React from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable, type Column } from "./components/DataTable/DataTable";

interface Person {
  id: number;
  name: string;
  age: number;
}

const columns: Column<Person>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: Person[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

const App: React.FC = () => {
  return (
    <div className="space-y-6">
      <InputField
        label="Username"
        placeholder="Enter username"
        helperText="This is a helper text."
      />

      <DataTable columns={columns} data={data} searchKey="name" />
    </div>
  );
};

export default App;
