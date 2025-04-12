import { Button, Table, TextInput } from "flowbite-react";
import { MouseEventHandler, useEffect, useState } from "react";

interface DatagridColumn {
  field: keyof any;
  headerName: string;
  width?: number;
  sortable?: boolean;
}

interface ColumnFormatter<T> {
  field: string;
  component: React.ComponentType<{ row: T }>;
  label?: string;
}

interface AddAction {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface DataGridProps<T> {
  rows: T[] | [] | undefined;
  columns: DatagridColumn[];
  columnsFormatters?: ColumnFormatter<T>[];
  addAction: AddAction;
}

export function DataGrid<T>(props: DataGridProps<T>) {
  const { rows, columns, columnsFormatters, addAction } = props;
  const [dataSource, setDataSource] = useState(rows);

  useEffect(() => {
    setDataSource(rows);
  }, [rows]);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;

    const filteredData = rows?.filter((item: any) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setDataSource(filteredData);
  };

  console.log(dataSource);

  return (
    <>
      <div className="flex justify-between mb-4">
        <TextInput
          onChange={handleSearch}
          type="text"
          placeholder="Pesquisar"
          required
        />

        <Button
          onClick={addAction.onClick}
          className=" text-white  rounded hover:bg-red-600"
        >
          {addAction.label}
        </Button>
      </div>

      <Table striped className="border border-gray-300">
        <Table.Head className="border-b border-gray-300">
          {columns.map((col) => (
            <Table.HeadCell
              key={col.field as string}
              className="border-r border-gray-300"
              style={{ width: col.width ? `${col.width}px` : "auto" }}
            >
              {col.headerName}
            </Table.HeadCell>
          ))}

          {columnsFormatters?.map((formatter, index) => (
            <Table.HeadCell
              key={`formatter-head-${index}`}
              className="border-r border-gray-300 text-center"
            >
              {formatter.label ?? ""}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {dataSource?.map((item, rowIndex) => (
            <Table.Row
              key={rowIndex}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b border-gray-300"
            >
              {columns.map((col) => (
                <Table.Cell
                  key={col.field as string}
                  className="border-r border-gray-300"
                >
                  {/* Aqui mostra o valor direto */}
                  {String(item[col.field as keyof typeof item])}
                </Table.Cell>
              ))}

              {columnsFormatters?.map((formatter, index) => (
                <Table.Cell
                  key={`formatter-${index}`}
                  className="border-r border-gray-300 text-center"
                >
                  <formatter.component row={item} />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
