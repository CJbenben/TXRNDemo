import React, { Component } from 'react';
import { FlatList, SectionList, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class FlatListBasics extends Component {
render() {
  return(
  	<ScrollView>
		<View style={styles.skyblueBg}>
		  <FlatList
			data={[
		      {key: 'Devin'},
	          {key: 'Jackson'},
	          {key: 'James'},
	          {key: 'Joel'},
	          {key: 'John'},
	          {key: 'Jillian'},
	          {key: 'Jimmy'},
	          {key: 'Julie'},
			]}
			renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
		  />
		</View>	

		<View style={styles.powderblueBg}>
	        <SectionList
	          sections={[
	            {title: 'D', data: ['Devin']},
	            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
	          ]}
	          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
	          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
	        />
		</View>

  	</ScrollView>
	);
  }
}

const styles = StyleSheet.create({
	container: {
	   flex: 1,
	   paddingTop: 22
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
		backgroundColor: 'skyblue'
	},
	powderblueBg: {
		backgroundColor: 'powderblue'
	},
})

