import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getRecord } from './services';
import { renderField, formatTime } from './utils';

const Details = () => {
  let { id } = useParams();
  const [record, setRecord] = useState(null);
  useEffect(() => {
    getRecord(id).then((resp) => {
      setRecord(resp.data);
    });
  }, [record]);
  const renderRecord = () => {
    if (!record) {
      return null;
    }
    const { title, mag, status, time, type, tsunami  } = record.properties;
    return (
      <div className="record">
        <div className="title">{title}</div>
        {renderField('Title', title)}
        {renderField('Magnitude', mag)}
        {renderField('Time', formatTime(time))}
        {renderField('Status', status)}
        {renderField('Tsunami', tsunami)}
        {renderField('Type', type)}
      </div>
    );
  }
  return (
    <div className="details">
      {renderRecord()}
    </div>
  );
};

export default Details;