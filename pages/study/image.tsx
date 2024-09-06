import React, { Component } from 'react';  
import {  
  StyleSheet,
  View,
  Image
} from 'react-native';  

function ImageDemo(): React.JSX.Element {
  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../../source/123.png')} style={styles.item} />
        <Image source={{uri: 'https://img95.699pic.com/xsj/0p/d7/mi.jpg%21/fh/300', cache: 'default'}} style={styles.item} />
      </View>
      <View style={styles.row}>
        <Image source={{ uri: 'https://wx1.sinaimg.cn/large/002LTpVoly4gp10w31w5zj60mv0gqgo102.jpg', cache: 'default' }} style={styles.item} />
      </View>
    </View>
	)
}

const styles = StyleSheet.create({
  container: {  
    backgroundColor: "cyan",  
    flexDirection: "column",  
    justifyContent: "flex-start",
    alignItems: "center",  
    flex:1  
  },
  row: {
    flexDirection: "row",
	  padding: 10,
	  fontSize: 18,
	  borderWidth: 1,
	  borderColor: 'gray',
  },
  item: {
    width: '50%',
    height: 100,
  },
});

export default module.exports = ImageDemo;
