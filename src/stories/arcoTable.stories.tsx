import React from "react";
import type { Meta, Story } from "@storybook/react";
import {Table} from '@arco-design/web-react'
import type {TableProps, } from '@arco-design/web-react'
import type { DataType } from "src/arcoDemo/Table";

export default {
    component: Table,
    title: 'arco-table'
} as Meta;

const Template: Story<TableProps<DataType>> = (arg) => {
    return <Table {...arg}/>
}

export const Simple = Template.bind({});
Simple.args = {
    data: [
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
