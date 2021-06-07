import React from 'react';
import moment from 'moment';

export const renderField = (label, value) => (
  <div className="field">
    <span className="label">{label}</span>
    <span className="value">{value}</span>
  </div>
);

export const formatTime = time => (
  moment(time).format('MMMM DD, YYYY, h:mm:ss A')
);