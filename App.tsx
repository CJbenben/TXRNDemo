/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import type {PropsWithChildren} from 'react';
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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from "./pages/home/home.tsx";
import Study from './pages/study/study.tsx';
import Me from './pages/me/me.tsx'
import DemoScreen from './pages/demo.tsx';

import Game from "./pages/home/game.tsx";
import Next from './pages/home/next.tsx';
import ButtonDemo from './pages/study/button.tsx';
import ImageDemo from './pages/study/image.tsx';
import ListDemo from './pages/study/list.tsx';
import OtherDemo from './pages/study/other.tsx';
import GetDataDemo from './pages/study/getData.tsx';

import { createStackNavigator } from '@react-navigation/stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Next" component={Next} options={{ title: '砍价详情页', headerShown: true }} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  )
};

const StudyStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Study" component={Study} />
    <Stack.Screen name="Button" component={ButtonDemo} />
    <Stack.Screen name="Image" component={ImageDemo} />
    <Stack.Screen name="List" component={ListDemo} />
    <Stack.Screen name="Other" component={OtherDemo} />
    <Stack.Screen name="GetData" component={GetDataDemo} />
  </Stack.Navigator>
);

const MeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Me" component={Me} />
    {/* <Stack.Screen name="Next" component={NextScreen} /> */}
  </Stack.Navigator>
)

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const HomeStack = () => (
  //   <Stack.Navigator
  //      screenOptions={({ route }) => ({
  //       tabBarVisible: route.name === 'Home' ? true : false,
  //     })}
  //   >
  //     <Stack.Screen name="Home" component={Home} />
  //     <Stack.Screen name="Next" component={Next} options={{ tabBarVisible: false}}/>
  //   </Stack.Navigator>
  // );

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Study" component={StudyStack} />
        <Tab.Screen name="Me" component={MeStack} />
        <Tab.Screen name="Demo" component={DemoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
