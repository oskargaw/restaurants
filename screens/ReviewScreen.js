import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Image } from 'react-native';
import { Icon, Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

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

  renderLikedRestaurants() {
    return this.props.likedRestaurants.map(restaurant => {
      const {
        text,
        name,
        image
      } = restaurant;

      return (
        <Card title={text} key={name}>
          <View style={{ height: 200 }}>
            <Image
              style={{ flex: 1 }}
              source={image}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{text}</Text>
              <Text style={styles.italics}>{name}</Text>
            </View>
            <View>
              <Button
                title="View Details"
                backgroundColor="#03A9F4"
              />
            </View>
          </View>
        </Card>
      );
    })
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.renderLikedRestaurants()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps(state) {
  return { likedRestaurants: state.likedRestaurants };
}

export default connect(mapStateToProps)(ReviewScreen);
