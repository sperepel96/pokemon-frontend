import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import moment from "moment";
import "./fightResultTable.scss";

import { useEffect, useMemo, useRef, useState } from "react";

const FightResultTable = ({ data, newData }) => {
  const [limit, setLimit] = useState(10);
  const chunkSize = 5;
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    if (newData) {
      setTableData((prevData) => [newData, ...prevData]);
    }
  }, [newData]);

  const possibleFields = [
    {
      key: "attacker",
      header: "Attacker",
      accessor: (row) => row.attacker,
    },
    {
      key: "defender",
      header: "Defender",
      accessor: (row) => row.defender,
    },
    {
      key: "currentTurn",
      header: "Turn",
      accessor: (row) => row.currentTurn,
    },
    {
      key: "damage",
      header: "Hit",
      accessor: (row) => row.damage,
    },
    {
      key: "playerHP",
      header: "Player HP",
      accessor: (row) => row.playerHP + " HP",
    },
    {
      key: "serverHP",
      header: "Server HP",
      accessor: (row) => row.serverHP + " HP",
    },
    {
      key: "defenderCurrentHP",
      header: "Defender HP",
      accessor: (row) => row.defenderCurrentHP + " HP",
    },
    {
      key: "createdAt",
      header: "When?",
      accessor: (row) => moment(row.createdAt).format("D/MM/YY, HH:mm:ss"),
    },
  ];

  const displayedFields = useMemo(() => {
    if (!tableData.length) return [];
    const existingKeys = Object.keys(tableData[0]);
    return possibleFields.filter((field) => existingKeys.includes(field.key));
  }, [tableData]);

  const columns = useMemo(
    () =>
      displayedFields.map((field) => ({
        accessorKey: field.key,
        header: field.header,
        cell: (info) => field.accessor(info.row.original),
      })),
    [displayedFields],
  );

  const visibleData = useMemo(
    () => tableData.slice(0, limit),
    [tableData, limit],
  );

  const table = useReactTable({
    data: visibleData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const parentRef = useRef();

  const rowVirtualizer = useVirtualizer({
    count: visibleData.length + 1,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    onChange: (virtualizer) => {
      const lastVirtualItem =
        virtualizer.getVirtualItems()[virtualizer.getVirtualItems().length - 1];

      if (
        lastVirtualItem.index >= visibleData.length - 1 &&
        limit < tableData.length
      ) {
        setLimit((prevLimit) =>
          Math.min(prevLimit + chunkSize, tableData.length),
        );
      }
    },
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  const paddingTop = virtualRows.length > 0 ? virtualRows[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <div
      className={"fight-result-container"}
      style={{
        // height: "200px",
        overflow: "auto",
        position: "relative",
      }}
      ref={parentRef}
    >
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          tableLayout: "fixed",
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          <tr style={{ height: `${paddingTop}px` }} />
          {virtualRows.map((virtualRow) => {
            const row = table.getRowModel().rows[virtualRow.index];
            if (!row) {
              return null;
            }
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{
                      border: "1px solid black",
                      padding: "5px",
                      textAlign: "center",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
          <tr style={{ height: `${paddingBottom}px` }} />
        </tbody>
      </table>
    </div>
  );
};
export default FightResultTable;
