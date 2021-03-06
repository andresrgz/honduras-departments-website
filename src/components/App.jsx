import React, { Component } from 'react';
import CountryMap from './CountryMap';
import DepartmentPanel from './DepartmentPanel';
import departments from '../data.json';

const defaultDepartmentId = 'HN.FM';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDepartmentId: defaultDepartmentId
    };
  }

  selectDepartment = selectedDepartmentId => {
    if (departments[selectedDepartmentId] === undefined) {
      throw new Error(`Department '${selectedDepartmentId}' not found`);
    }
    this.setState({ selectedDepartmentId });
  };

  render() {
    return (
      <div className="container-app">
        <CountryMap selectDepartment={this.selectDepartment} selectedDepartmentId={this.state.selectedDepartmentId} />
        <DepartmentPanel department={departments[this.state.selectedDepartmentId]} />
      </div>
    );
  }
}

export default App;
