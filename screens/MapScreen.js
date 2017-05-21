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

  onButtonPress = () => {
    this.props.navigation.navigate('deck');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation={true}
          region={this.state.region}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search Restaurants Nearby"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
}

export default MapScreen;
