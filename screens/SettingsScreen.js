import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedRestaurants } from '../actions';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button
          title='Reset Liked Restaurants'
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedRestaurants}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedRestaurants })(SettingsScreen);
