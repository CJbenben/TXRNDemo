import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableHighlight, Alert } from 'react-native';

function ButtonDemo(): React.JSX.Element {

  function onPressButton() {
    Alert.alert("You tapped the button!");
  }

	function setState(arg0: { text: string; }): void {
		throw new Error('Function not implemented.');
	}

	return (
		<ScrollView>
			<View style={styles.skyblueBg}>
				<Text style={{top: 50}}>Hello World!</Text>
				<Text>Hello World2222!</Text>
			</View>

			<View style={styles.powderblueBg}>
			  <TextInput style={{height: 50, backgroundColor: 'red'}}
			  	placeholder='这里是输入框33333'
			  	onChangeText={(text) => setState({text})}
			  />
			</View>

			{/* <View>
				<Text>{this.state.text}</Text>
			</View> */}

			<TouchableHighlight onPress={onPressButton}>
				<Text style={styles.btn}>Button</Text>
			</TouchableHighlight>
		</ScrollView>
	);
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

export default module.exports = ButtonDemo;  