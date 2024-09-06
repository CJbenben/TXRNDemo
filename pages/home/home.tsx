import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, useColorScheme, StyleSheet, Text, View, ScrollView, StatusBar, Button } from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const HomeScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const [postText, setPostText] = React.useState('');
  // const { itemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="点击跳转下一页"
        onPress={() => navigation.navigate('Next', { itemId: 86 })}
      />
      <Text style={{ margin: 10 }}>这里是第二页回传值: {route.params?.post}</Text>
      <Button
        title='Game'
        onPress={() => navigation.navigate('Game', {})}
      />
    </View>
  );
};

const Home = ({ navigation }: any): React.JSX.Element => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const route = useRoute();

		
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <HomeScreen navigation={navigation} route={route} />
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default module.exports = Home;