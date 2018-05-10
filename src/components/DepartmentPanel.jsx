import React from 'react';

const DepartmentPanel = props => (
  <div className="container-department-panel">
    <h1>{props.department.name}</h1>
    <img src={props.department.imageURL} alt={props.department.name} />
    <p>{props.department.description}</p>
  </div>
);

export default DepartmentPanel;
