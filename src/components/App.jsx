import React, { Component } from 'react';
import CountryMap from './CountryMap';
import DepartmentPanel from './DepartmentPanel';
import departments from '../data.json';

const defaultDepartmentId = 'HN.FM';

class App extends Component {
  constructor() {
    super();
    this.selectDepartment = this.selectDepartment.bind(this);
    this.state = {
      departments,
      selectedDepartmentId: defaultDepartmentId
    };
  }

  selectDepartment(departmentId) {
    if (this.state.departments[departmentId] === undefined) {
      throw new Error(`Department '${departmentId}' not found`);
    }
    this.setState({ selectedDepartmentId: departmentId });
  }

  render() {
    return (
      <div>
        <CountryMap selectDepartment={this.selectDepartment} />
        <DepartmentPanel department={this.state.departments[this.state.selectedDepartmentId]} />
      </div>
    );
  }
}

export default App;
