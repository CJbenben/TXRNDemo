import React, { Component } from 'react';
import { Text, TextInput, View, Image, ScrollView } from 'react-native';

function OtherDemo(): React.JSX.Element {

  return (
    <ScrollView>
      <TextInput
        style={{
          height: 100,
          backgroundColor: 'red'
        }}
        placeholder="Type here to translate!"
        // onChangeText={(text) => this.setState({text})}
      />
      

      <Text style={{
        height:50,
        backgroundColor: 'blue'
      }}>
        {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
      </Text>


      <Image source={require('../../source/123.png')} />

      <Text style={{fontSize:40}}>Scroll me View</Text>

      {/* <Image source={require('../img/favicon2.png')} /> */}

      <View style={{
        height: 200,
        backgroundColor: 'skyblue'
      }}>

      </View>

      
      {/* <Image source={require('../img/favicon3.png')} /> */}


      <View style={{
        height: 100,
        backgroundColor: 'blue'
      }}>

      </View>

    </ScrollView>
  );
}

export default module.exports = OtherDemo;