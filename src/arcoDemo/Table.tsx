import React from 'react';
import { Table,TableColumnProps } from '@arco-design/web-react'
interface DataType {
    driverNo?: string;
    name?: string;
    idCard?: string;
    phone?: string;
    realAuthStatus?: '1' | '0';
}

const EditTable = () => {

    const columns: TableColumnProps<DataType>[]  = [
        {
            title: '编号',
            dataIndex: 'driverNo',
        },
        {
            title: '司机名称',
            dataIndex: 'name',
        },
        {
            title: '银行卡号',
            dataIndex: 'idCard',
        },
        {
            title: '联系电话',
            dataIndex: 'phone',
        },
        {
            title: '认证状态',
            dataIndex: 'realAuthStatus',
        },
    ];
    const data: DataType[] = [
        {
            driverNo: '2211111',
            name:'金录成',
            idCard: '640324198702012616',
            phone: '13699998886',
            realAuthStatus: '0',
        },
        {
            driverNo: '22111112',
            name:'金录成',
            idCard: '640324198702012614',
            phone: '13699998886',
            realAuthStatus: '0',
        },
        {
            driverNo: '2211111',
            name:'金录成',
            idCard: '640324198702012615',
            phone: '13699998881',
            realAuthStatus: '1',
        },
    ]
    return <>
        <Table<DataType>
            data={data}
            columns={columns}
        />
    </>
}
export default EditTable;