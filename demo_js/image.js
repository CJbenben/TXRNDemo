import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,
  Image 
} from 'react-native';  



class image extends Component {

  render(){
  	return(
  		/*
	  <View style={styles.container}>
	    <Image source={require('../img/favicon.png')} />
	    <Image source={require('../img/favicon2.png')} />
	  </View>
	  */
	  
	  <View style={styles.firstPage}>
	  	<Image source={require('../resources/test_gif.gif')} />
	  	<Image source={{url: 'icon'}} style={{width: 200, height: 50, top: 40}} />
	  	<Image source={{url: 'http://img.zcool.cn/community/01635d571ed29832f875a3994c7836.png@900w_1l_2o_100sh.jpg', cache: 'default'}} style={{width: 300, height: 200}} />
	  </View>
	)
  }
}

const styles = StyleSheet.create({
  firstPage: {
    backgroundColor: 'cyan',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  container: {  
    backgroundColor:"cyan",  
    flexDirection:"column",  
    justifyContent:"space-around",  
    alignItems:"center",  
    flex:1  
  },  
  item: {
	  padding: 10,
	  fontSize: 18,
	  height: 44,
	  borderWidth: 1,
	  borderColor: 'black',
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
    padding:10,
    height:44,  
    borderWidth:1,  
    borderRadius:3,  
    borderColor:"black",  
    backgroundColor:"yellow",
    },
  flex:{
    flex: 1,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});

module.exports = image;
