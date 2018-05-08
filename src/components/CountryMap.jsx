import React, { Component } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import map from '../maps/HND.json';

const scalingFactor = 10000;
const countryLatitude = 14.7;
const countryLongitude = -86.3;
const mapWidthRatio = 0.12;
const mapHeightRatio = 0.075;

class CountryMap extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(geography) {
    this.props.selectDepartment(geography.properties.HASC_1);
  }

  render() {
    return (
      <ComposableMap
        projection="mercator"
        projectionConfig={{ scale: scalingFactor }}
        width={mapWidthRatio * scalingFactor}
        height={mapHeightRatio * scalingFactor}
      >
        <ZoomableGroup center={[countryLongitude, countryLatitude]} disablePanning>
          <Geographies geography={map}>
            {(geographies, projection) =>
              geographies.map((geography, i) => (
                <Geography
                  key={i}
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
    );
  }
}

export default CountryMap;
