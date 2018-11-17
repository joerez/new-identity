import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// import NameGenerator from './NameGenerator';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: {
        name: 'Hit the button above to generate a new name.',
        age: ''
        },
      previousName: 'none'
    }

    this.handleTouch = this.handleTouch.bind(this);
    this.compareNames = this.compareNames.bind(this);
  }

  static navigationOptions = {
    title: 'Name Generator',
  };


  handleTouch() {
    let names = [{name: 'Jack Henny', age: 24}, {name: 'George Elliot', age: 19}]
    let pickedName = names[Math.floor(Math.random() * names.length)]
    let person = this.compareNames(pickedName, this.state.name, names)

    this.setState({name: person})
  }

  compareNames(newName, oldName, names) {
    if (newName.name === oldName.name) {
      let newName = names[Math.floor(Math.random() * names.length)]

      let newVar = this.compareNames(newName, oldName, names)
      return newVar
    }
    return newName
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleTouch} style={styles.text}>
          <Text>Generate New Identity</Text>
        </TouchableOpacity>


        <Text style={styles.renderedText}>{this.state.name.name} {this.state.name.age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#2c3e50',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#2c3e50',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  renderedText: {
    paddingTop: 50,
  },
});

export default Main;
