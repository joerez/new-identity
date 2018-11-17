// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
//
// class NameGenerator extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       name: this.props.number
//     }
//   }
//
//   componentDidMount() {
//     let names = ['Jack Henny', 'George Elliot', 'Bryant Batista', 'James George']
//     let pickedName = names[Math.floor(Math.random() * names.length -1)]
//     this.setState({name: names[this.props.number]})
//   }
//
//   getDerivedStateFromProps(nextProps) {
//     console.log(nextProps)
//     let names = ['Jack Henny', 'George Elliot', 'Bryant Batista', 'James George']
//     let pickedName = names[Math.floor(Math.random() * names.length -1)]
//     this.setState({name: names[this.props.number]})
//   }
//
//
//   render() {
//     return (
//         <Text styles={styles.renderedText}>{this.state.name}</Text>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 100,
//     flex: 1,
//     backgroundColor: '#ecf0f1',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   text: {
//     color: '#2c3e50',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderColor: '#2c3e50',
//     borderRadius: 20,
//     padding: 10,
//     paddingLeft: 30,
//     paddingRight: 30,
//   },
//   renderedText: {
//     paddingTop: 50,
//   },
// });
//
// export default NameGenerator;
