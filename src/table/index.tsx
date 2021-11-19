import React from "react";
import ColGroup from "./ColGroup";
import { useComponent } from "./hooks/useComponents";
import { TableProps } from "./types";
import THead from "./thead";

function Table<T extends any>(props: TableProps<T>) {
  const { columns = [] } = props;
  const { ComponentHeaderWrapper, ComponentTable } = useComponent();

  const renderThead = (): React.ReactNode => {
    return (
      <ComponentHeaderWrapper>
        <ComponentTable>
          <ColGroup columns={columns} />
          <THead<T> />
        </ComponentTable>
      </ComponentHeaderWrapper>
    );
  };

  return <div>{renderThead()}</div>;
}
Table.displayName = "table";
export default Table;
