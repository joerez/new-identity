import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Identities } from './utilities';

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
    let names = Identities
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
          <Text style={{color: 'white'}}>Generate New Identity</Text>
        </TouchableOpacity>

        <View style={styles.detailCon}>
          <Text style={styles.renderedText}>Name: {this.state.name.name} {this.state.name.age}</Text>
          <Text style={styles.renderedText}>Job: {this.state.name.job}</Text>
          <Text style={styles.renderedText}> Purpose: {this.state.name.purpose}</Text>
          <Text style={styles.renderedText}>Home Town: {this.state.name.homeTown}</Text>
        </View>

        <Button
          style={styles.share}
          title="Share"
          onPress={() => this.props.navigation.navigate('Details')}
        />


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
    textAlign: 'center',
  },
  detailCon: {
    margin: 25,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowRadius: 30,
    textAlign: 'left',
  },
  text: {
    color: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#8e44ad',
  },
  renderedText: {
    paddingTop: 50,
    width: 300,
    textAlign: 'left',
  },
  boldText: {
    fontWeight: 'bold',
  },
  share: {
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: 30,
  },
});

export default Main;
