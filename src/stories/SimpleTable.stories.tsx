import React from "react";
import type { Story, Meta } from "@storybook/react";
import type { TableProps } from "src/table/types";
import type { DataType } from "src/arcoDemo/Table";
import Table from "../table";

export default {
  component: Table,
  title: "my-table",
} as Meta;

const Template: Story<TableProps<DataType>> = (params) => {
    return <Table {...params}/>;
};


export const Simple = Template.bind({});

Simple.args = {
    dataSource: [
        {
            driverNo: '1222133',
            name: 'zhang',
            idCard:'371326',
            phone: '13671353491',
            realAuthStatus: '1'
        },
        {
            driverNo: '1222133',
            name: 'zhang',
            idCard:'371326',
            phone: '13671353491',
            realAuthStatus: '1'
        },
    ],
    columns: [
        { dataIndex: 'driverNo',title: '司机编号' },
        { dataIndex: 'name', title: '姓名' },
        { dataIndex: 'idCard', title: '身份证' },
        { dataIndex: 'phone', title: '手机号' },
        { dataIndex: 'realAuthStatus', title: '状态' },
    ]
}