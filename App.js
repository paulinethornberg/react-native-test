import React from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  Navigator, 
  View, 
  Button,
  Image,
  TextInput,
  Alert,
  ScrollView,
  FlatList,
  ActivityIndicator,
  ListView } from 'react-native';

var LearnMore = require('./LearnMore.js');

export class Two extends React.Component{
render() {
    return ( 
        <View style={styles.container}>
        <Text>This is page two</Text>
        <Text>name: {this.props.myVar}</Text>
        </View>
    );
}
}

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount(){
      return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  goToNext(){
    Alert.alert('hello fom method')
    };
 render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView >
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hej petter!.</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Button
    onPress={this.goToNext} 
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  onPress={() => { Alert.alert('You tapped the button!')}}
  title="Press Me"
/>
      <TextInput
          style={{height: 40, padding: 10, width: 300}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />

         <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
        <FlatList 
        data={[
          {key: 'Devin'},
          {key: 'Pauline'},
          {key: 'pulle'},
        ]}
        renderItem = { ({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}

// class App extends React.Component {
//   render() {

//     return (
//       <Navigator
//                 style={{flex:1}}
//           initialRoute={{name: 'Main', component: Main, index: 0}}
//           renderScene={(route, navigator) =>    {
//             if (route.component) {
//                           return React.createElement(route.component, { navigator, route } );
//                       }
//                 }}
//           navigationBar={
//             <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
//       } />
// );
// }
// }

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


