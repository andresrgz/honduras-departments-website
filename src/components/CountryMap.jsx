import React, { Component } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import map from '../maps/HND.json';

const scale = 10000;
const mapWidthRatio = 0.12;
const mapHeightRatio = 0.075;
const countryCoordinates = [-86.3, 14.7];

class CountryMap extends Component {
  handleClick = geography => this.props.selectDepartment(geography.properties.HASC_1);

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
            <Geographies geography={map}>
              {(geographies, projection) =>
                geographies.map(geography => (
                  <Geography
                    key={geography.properties.HASC_1}
                    geography={geography}
                    projection={projection}
                    onClick={this.handleClick}
                    style={{
                      default: {
                        fill: '#ECEFF1',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      hover: {
                        fill: '#607D8B',
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
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default CountryMap;
