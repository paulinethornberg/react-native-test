import React from 'react';
import { AppRegistry, StyleSheet, Text, Navigator, View, Button  } from 'react-native';

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

export default class Main extends React.Component {
  goToNext(myVar){
    this.props.navigator.push({
      component: Two,
      passProps: {
        myVar: myVar,
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hej petter!.</Text>
        <Button
    onPress={this.goToNext}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
}



class App extends React.Component {
  render() {

    return (
      <Navigator
                style={{flex:1}}
          initialRoute={{name: 'Main', component: Main, index: 0}}
          renderScene={(route, navigator) =>    {
            if (route.component) {
                          return React.createElement(route.component, { navigator, route } );
                      }
                }}
          navigationBar={
            <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
      } />
);
}
}

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
        // <Text style={{padding: 10, fontSize: 42}}>
        //   {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        // </Text>