import React from 'react';

const DepartmentPanel = props => (
  <div className="container-department-panel">
    <h1 className="container-department-panel-title">{props.department.name}</h1>
    <img className="container-department-panel-img" src={props.department.imageURL} alt={props.department.name} />
    <p className="container-department-panel-text">{props.department.description}</p>
  </div>
);

export default DepartmentPanel;
