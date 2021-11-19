import { ReactNode } from "react";
export interface ColumnsProps<T extends any> {
  className?: string;
  key?: string | number;
  dataIndex?: string;
  title?: ReactNode;
  width?: number | string;
}
