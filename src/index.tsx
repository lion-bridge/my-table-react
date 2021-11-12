import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './table';
import '@arco-design/web-react/dist/css/arco.css';
import { Button } from '@arco-design/web-react'
import EditTable from './arcoDemo/Table';
ReactDOM.render(
  <React.StrictMode>
    <Table />
    <Button type='primary'>按钮</Button>
    <EditTable />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
