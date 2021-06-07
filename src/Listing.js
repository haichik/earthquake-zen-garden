import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Table } from 'antd';
import moment from 'moment';
import { getRecords } from './services';
import { formatTime } from './utils';

const sortDirections = ['ascend', 'descend', 'ascend'];
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    width: '45%',
    render: (text, record) => <Link className="link" to={`/earthquakes/${record.id}`}>{text}</Link>,
    sorter: (a, b) => (a ? a.title.localeCompare(b.title) : -1),
    sortDirections: sortDirections,
  },
  {
    title: 'Magnitude',
    dataIndex: 'mag',
    width: '20%',
    align: 'center',
    sorter: (a, b) => (a ? a.mag - b.mag : -1),
    sortDirections: sortDirections,
    },
  {
    title: 'Time',
    dataIndex: 'time',
    width: '35%',
    render: (text, record) => formatTime(record.time),
    sorter: (a, b) => (a ? a.time - b.time : -1),
    sortDirections: sortDirections,
  },
  
];

const Listing = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    getRecords().then((resp) => {    
      setRecords(resp.data);
    });
  }, [records.length]);
  return (
    <div className="listing">
      <div className="title">USGS All Earthquakes, Past Hour</div>
      <Table
        className="table-listing"
        size="small"
        dataSource={records}
        columns={columns}
        rowKey={record => record.id}
        pagination={false}
      />
    </div>
  );
};

export default Listing;