/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../router.tsx';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  TextInput,
  useColorScheme,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function onPressButton() {
  Alert.alert(
    'title',
    'detailTile'
  )
}

function Next(): React.JSX.Element {
  const [postText, setPostText] = React.useState('');
  const route = useRoute();
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  const itemId = route.params;

  function callback() {
    navigation.navigate('Home', { post: postText }) 
  }
  
  return (
    <ScrollView>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>这里是第二页2</Text>
        <Text style={{fontSize:30}}>第一页传递参数: {JSON.stringify(itemId)}</Text>
        <TextInput
        multiline
        placeholder="请输入回传第一页值"
        style={{ height: 100, width: 300, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      
      <Button
        title="返回上一页并传递参数"
        onPress={callback }
      />
      </View>
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

export default module.exports = Next;
