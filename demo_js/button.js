import React, { Component } from 'react';
import { FlatList, SectionList, StyleSheet, Text, TextInput, View, ScrollView, TouchableHighlight } from 'react-native';

export default class Button extends Component {
constructor(props) {
  super(props);
  this.state = {text: 'response'};
}

  _onPressButton() {
    alert("You tapped the button!");
  }

render() {
	return (
		<ScrollView>
			<View style={styles.skyblueBg}>
				<Text style={{top: 50}}>Hello World!</Text>
				<Text>Hello World2222!</Text>
			</View>

			<View style={styles.powderblueBg}>
			  <TextInput style={{height: 50, backgroundColor: 'red'}}
			  	placeholder='这里是输入框33333'
			  	onChangeText={(text) => this.setState({text})}
			  />
			</View>

			<View>
				<Text>{this.state.text}</Text>
			</View>

			<TouchableHighlight onPress={this._onPressButton}>
				<Text style={styles.btn}>Button</Text>
			</TouchableHighlight>
		</ScrollView>
	);
}

}

const styles = StyleSheet.create({
	container:{  
        backgroundColor:"cyan",  
        flexDirection:"row",  
        justifyContent:"space-around",  
        alignItems:"center",  
        flex:1  
    },  
	item: {
	    padding: 10,
	    fontSize: 18,
	    height: 44,
	},
	sectionHeader: {
	    paddingTop: 2,
	    paddingLeft: 10,
	    paddingRight: 10,
	    paddingBottom: 2,
	    fontSize: 14,
	    fontWeight: 'bold',
	    backgroundColor: 'rgba(247,247,247,1.0)',
	  },
	skyblueBg: {
		height: 100,
		backgroundColor: 'skyblue'
	},
	powderblueBg: {
		height: 100,
		backgroundColor: 'powderblue'
	},
	btn:{  
        width:60,  
        height:30,  
        borderWidth:1,  
        borderRadius:3,  
        borderColor:"black",  
        backgroundColor:"yellow",  
        justifyContent:"center",  
        alignItems:"center"  
    }
});

module.exports = Button;  