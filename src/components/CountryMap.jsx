import React, { Component } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import map from '../maps/HND.json';

const scale = 10000;
const mapWidthRatio = 0.12;
const mapHeightRatio = 0.075;
const countryCoordinates = [-86.3, 14.7];

class CountryMap extends Component {
  handleClick = departmentId => this.props.selectDepartment(departmentId);

  render() {
    const width = mapWidthRatio * scale;
    const height = mapHeightRatio * scale;
    return (
      <div className="container-country-map">
        <h1 className="container-country-map-name">Honduras</h1>
        <ComposableMap
          projection="mercator"
          projectionConfig={{ scale }}
          width={width}
          height={height}
          aspectRatio="xMinYMin meet"
        >
          <ZoomableGroup center={countryCoordinates} disablePanning>
            <Geographies geography={map} disableOptimization>
              {(geographies, projection) =>
                geographies.map(geography => {
                  const departmentId = geography.properties.HASC_1;
                  return (
                    <Geography
                      key={departmentId}
                      geography={geography}
                      projection={projection}
                      onClick={() => this.handleClick(departmentId)}
                      style={{
                        default: {
                          fill: this.props.selectedDepartmentId === departmentId ? '#FF5722' : '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none'
                        },
                        hover: {
                          fill: this.props.selectedDepartmentId === departmentId ? '#FF5722' : '#607D8B',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none'
                        },
                        pressed: {
                          fill: '#FF5722',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none'
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default CountryMap;
