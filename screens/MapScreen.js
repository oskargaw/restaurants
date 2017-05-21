import React, { Component } from 'react';
import { Platform, Text, View, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView, Constants, Location, Permissions } from 'expo';

const { width, height } = Dimensions.get('window');
const LATITUDE_DELTA = 0.01;
const ASPECT_RATIO = width / height;

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true };

class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='my-location' size={20} color={tintColor} />;
    }
  }

  state = {
    location: {
      coords: {
        latitude: 0, longitude: 0
      }
    },
  };

  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }

  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
    },
    this.setState({location, region})
  }

  render() {
    return (
        <MapView
          style={{ flex: 0.5 }}
          showsUserLocation={true}
          region={this.state.region}
        />
    );
  }
}

export default MapScreen;
