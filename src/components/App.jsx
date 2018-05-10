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

  selectDepartment(selectedDepartmentId) {
    if (this.state.departments[selectedDepartmentId] === undefined) {
      throw new Error(`Department '${selectedDepartmentId}' not found`);
    }
    this.setState({ selectedDepartmentId });
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
