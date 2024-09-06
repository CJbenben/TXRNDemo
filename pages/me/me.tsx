import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, useColorScheme, StyleSheet, Text, View, ScrollView, StatusBar, Button } from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Me(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigation = useNavigation();
  const route = useRoute();
		
	return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Me</Text>
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

export default module.exports = Me;