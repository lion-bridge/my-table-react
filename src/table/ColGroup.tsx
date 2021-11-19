import React from "react";
import { ColumnsProps } from "./types";
interface ColGroupProps {
  columns?: ColumnsProps<any>[];
}

const calcWidth = (width?: number | string): {width?: string | number} => {
    return Number(width) > 0 ? {width} : {};
 }

const ColGroup = ({ columns }: ColGroupProps) => {
    return <colgroup>
        {
            columns?.map((col, index) => {
                return <col key={col?.dataIndex || col?.key} style={calcWidth(col?.width)}/>
            })
        }
    </colgroup>
};
export default ColGroup;
