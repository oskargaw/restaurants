import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Icon, Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Liked',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='favorite' size={20} color={tintColor} />;
    },
    headerRight: (
      <Button
        title="Settings"
        onPress={() => { navigation.navigate('settings') }}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    ),
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    },
  });

  render() {
    return (
      <View>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
