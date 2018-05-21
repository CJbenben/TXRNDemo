import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View  
} from 'react-native';  

//var GetData = require("./demo_js/getData");  
//var Button = require('./demo_js/button');
//var Other = require('./demo_js/other');
//var Navigator = require('./demo_js/navigator');
var Image = require('./demo_js/image');

export default class FetchDemo extends Component {  
  render() {  
    return (  
      //<GetData/>  
      //<Button/>
      //<Other/>
      //<Navigator/>
      <Image/>
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  
});  
  
//AppRegistry.registerComponent('FetchDemo', () => FetchDemo);  