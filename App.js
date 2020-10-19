/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="点击跳转下一页"
        onPress={() => navigation.navigate('Second', {
            itemId: 86
        })}
      />
      <Text style={{ margin: 10 }}>这里是第二页回传值: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  const { itemId } = route.params;
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>这里是第二页</Text>
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
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('First', { post: postText });
        }}
      />
      </View>
      
    </>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='screen'>
        <Stack.Screen name="First" component={HomeScreen} />
        <Stack.Screen name="Second" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
