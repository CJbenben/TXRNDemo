import React, { Component } from 'react';
import { AppRegistry, Text, EssayForm, TextInput, View, Image, ScrollView } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ScrollView>
        <TextInput
          style={{
            height: 100,
            backgroundColor: 'red'
          }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        

        <Text style={{
          height:50,
          backgroundColor: 'blue'
        }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>


        <Image source={require('../img/favicon.png')} />

        <Text style={{fontSize:40}}>Scroll me View</Text>

        <Image source={require('../img/favicon2.png')} />

        <View style={{
          height: 200,
          backgroundColor: 'skyblue'
        }}>

        </View>

        
        <Image source={require('../img/favicon3.png')} />


        <View style={{
          height: 100,
          backgroundColor: 'blue'
        }}>

        </View>

      </ScrollView>
    );
  }
}

module.exports = PizzaTranslator;  

// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Please write an essay about your favorite DOM element.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }




// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);



// import React, { Component } from 'react';
// import { Text, Image, StyleSheet, View } from 'react-native';

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//     fontSize: 20,
//   },
// });

// class Menthed extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {showText: true};

//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: ! previousState.showText };
//       });
//     }, 1000000);
//   }

//   render() {
//     let display = this.state.showText ? this.props.text : '';
//     return (
//       <Text style = {styles.red}>{display}</Text>
//       );
//   }
// }

// class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       // <View style={{alignItems: 'center', top: 50}}>8
//       //   <Menthed text='I love to blink'/>
//       //   <Menthed text='Yes blinking is so great' />
//       //   <Menthed text='Why did they ever take this out of HTML' />
//       //   <Menthed text='Look at me look at me look at me' />
//       // </View>
//       <View style={{
//         flex: 1, 
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         alignItems: 'stretch'
//       }}>
//         <View style={{height: 50, backgroundColor: 'skyblue'}}></View>
//         <View style={{height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }