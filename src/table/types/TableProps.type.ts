import { ColumnsProps } from ".";


export interface TableProps<T extends any> {
    className?: string;
    dataSource?: T[];
    columns?: ColumnsProps<T>[];
    rowKey?: string | ((record: T) => string);
}