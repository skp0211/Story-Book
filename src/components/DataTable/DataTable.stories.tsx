import { DataTable, type Column } from "./DataTable";

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

const data = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

export default {
  title: "Components/DataTable",
  component: DataTable,
};

export const Default = () => {
  return (
    <DataTable<Person>
      data={data}
      columns={columns}
    />
  );
};

export const WithSearch = () => {
  return (
    <DataTable<Person>
      data={data}
      columns={columns}
      searchKey="name"
    />
  );
};

export const Empty = () => <DataTable data={[]} columns={columns} />;
