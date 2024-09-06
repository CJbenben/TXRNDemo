import React, { Component } from 'react';
import { NavigatorIOS, Text, View, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene',
      component: DetailPage,
    });
  }

  render() {
    return (
      <View style={styles.firstPage}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward.bind(this)}>
          <Text style={styles.btn}>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class DetailPage extends Component {
  _show(text) {
    alert(text);
  }

  _handleBackButtonPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
           onPress={this._show.bind(this,'传递 参数')}
           activeOpacity={0.5}>
           <Text style={styles.item}>React Native</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={this._handleBackButtonPress.bind(this)}>
           <Text style={styles.item}>返回上一级页面</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstPage: {
    backgroundColor: 'cyan',
    flexDirection: 'row',
    top: 100,
  },
  container: {  
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
module.exports = NavigatorIOSApp;