import React, { Component } from 'react';
import { SafeAreaView, useColorScheme, StyleSheet, Text, TextInput, View, ScrollView, TouchableHighlight, StatusBar, Button } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './../router.tsx';
import { StackNavigationProp } from '@react-navigation/stack';

function StudyScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

	return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="button" onPress={() => navigation.navigate("Button", {})} />
          <Button title="image" onPress={() => navigation.navigate('Image', {})} />
          <Button title="list" onPress={() => navigation.navigate('List', {})} />
          <Button title="other" onPress={() => navigation.navigate('Other', {})} />
          <Button title="getData" onPress={() => navigation.navigate('GetData', {})} />
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default module.exports = StudyScreen;  