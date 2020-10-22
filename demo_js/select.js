import React from 'react';
import {Text,TouchableOpacity, Dimensions, View, StyleSheet, Switch,} from 'react-native';
const { width, height } = Dimensions.get('window');
const cellWidth = width * 0.3;
export default function App() {
    const [isSingle, setIsSingle] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>单选</Text>
                <Switch style={{ marginLeft: 10 }} value={isSingle} onValueChange={setIsSingle}/>
            </View>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={{ borderColor: 'black', borderWidth: 1 }} />
                {isSingle
                    ? [...new Array(9)].map((_, i) => (
                        <TouchableOpacity key={i} onPress={() => setSelectedIndex(i)} style={[styles.cell,selectedIndex === i && { backgroundColor: 'green' }]}
                        />))
                    : [...new Array(9)].map((_, i) =>(<Cell key={i} />))
                }
            </View>
        </View>
    );
}

//明确状态归属，合理切分组件
function Cell() {
    const [selected, setSelected] = React.useState(false);
    return (<TouchableOpacity
            onPress={() => setSelected(!selected)}
            style={[styles.cell, selected && {
                backgroundColor: 'green'
            }]}
            />
          );
}

//明确状态归属，合理切分组件
const styles = StyleSheet.create({
    container: {},
    innerContainer: {
        marginTop: 100,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        width: cellWidth,
        height: cellWidth,
        borderWidth: 1,
        borderColor: 'black',
    }
})