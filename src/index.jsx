import React, { Component } from 'react';
import { render } from 'react-dom';
import CountryMap from './components/CountryMap';
import DepartmentPanel from './components/DepartmentPanel';
import departments from './data.json';
import './index.css';

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

render(<App />, document.getElementById('app'));
