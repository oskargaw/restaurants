import React, { Component } from 'react';
import { Platform, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../img/restaurant.jpg')
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../img/restaurant.jpg')
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../img/restaurant.jpg')
  }
];

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Restaurants',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='collections-bookmark' size={20} color={tintColor} />;
    },
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  };

  render() {
    return (
      <Container>
        <View>
            <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                    <Card style={{ marginTop: 50, marginLeft: 5, marginRight: 5 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={item.image} />
                                <Body>
                                    <Text>{item.text}</Text>
                                    <Text note>NativeBase</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{ height: 200 }} cardBody>
                            <Image
                              style={{ flex: 1 }}
                              resizeMode='contain'
                              source={item.image} />
                        </CardItem>
                        <CardItem>
                            <Icon name='favorite' color={'#ED4A6A'} />
                            <Text>{item.name}</Text>
                        </CardItem>
                    </Card>
                }
            />
        </View>
      </Container>
    );
  }
}

export default DeckScreen;
