import React, { Component } from 'react';
import CountryMap from './CountryMap';
import DepartmentPanel from './DepartmentPanel';
import departments from '../data.json';

const defaultDepartmentId = 'HN.FM';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDepartment: departments[defaultDepartmentId]
    };
  }

  selectDepartment = selectedDepartmentId => {
    const selectedDepartment = departments[selectedDepartmentId];
    if (selectedDepartment === undefined) {
      throw new Error(`Department '${selectedDepartmentId}' not found`);
    }
    this.setState({ selectedDepartment });
  };

  render() {
    return (
      <div className="container-app">
        <CountryMap selectDepartment={this.selectDepartment} />
        <DepartmentPanel department={this.state.selectedDepartment} />
      </div>
    );
  }
}

export default App;
