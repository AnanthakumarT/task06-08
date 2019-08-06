
import React, { Component } from 'react';
 import NewScreen from'./NewScreen';
import { StyleSheet, View, AsyncStorage, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
 
export default class SettingScreen extends Component {
 
 
  constructor(props)
  {
    super(props);
  
    this.state={
  
      Username : '',Password:'',Age:'',Gender:'',Address:'',
 
      getUsername : '', getpass : ''
                    , getage : ''
                     , getgender : '', getaddress : ''
  

  
    }
  }
 
  setValueLocally=()=>{
 
    AsyncStorage.setItem('User', this.state.Username);
    AsyncStorage.setItem('pass', this.state.Password); 
    AsyncStorage.setItem('age', this.state.Age); 
    AsyncStorage.setItem('gender', this.state.Gender); 
    AsyncStorage.setItem('address', this.state.Address);
    AsyncStorage.mergeItem('user',json.stringify(this.state.getUsername))

 
    Alert.alert("Value Stored Successfully.")
    
  }
 
  getValueLocally=()=>{
 
    AsyncStorage.getItem('User').then((value) => this.setState({ getUsername : value }))
    AsyncStorage.getItem('pass').then((value) => this.setState({ getpass : value }))
    AsyncStorage.getItem('age').then((value) => this.setState({ getage : value }))
    AsyncStorage.getItem('gender').then((value) => this.setState({ getgender : value }))
    AsyncStorage.getItem('address').then((value) => this.setState({ getaddress : value }))

    
  }
  
  render() {
   
    return (<View style={styles.MainContainer}>
 
 
<TextInput
       
       placeholder="Enter UserName"
   
       onChangeText={ data => this.setState({Username : data}) }

       underlineColorAndroid='transparent'
   
       style={styles.TextInputStyle}
     />
     <TextInput
       
       placeholder="password"
   
       onChangeText={ data => this.setState({Password : data}) }

       underlineColorAndroid='transparent' secureTextEntry={true}
   
       style={styles.TextInputStyle}
     /><TextInput
       
     placeholder="Enter Age"
 
     onChangeText={ data => this.setState({Age : data}) }

     underlineColorAndroid='transparent'
 
     style={styles.TextInputStyle}
   /><TextInput
       
   placeholder="Enter Gender"

   onChangeText={ data => this.setState({Gender : data}) }

   underlineColorAndroid='transparent'

   style={styles.TextInputStyle}
 /><TextInput
       
 placeholder="Enter address"

 onChangeText={ data => this.setState({Address : data}) }

 underlineColorAndroid='transparent'

 style={{height: 80,width: '100%',
 borderWidth: 1, 
 borderColor: '#028b53',textAlign: 'center',

 borderRadius: 10
 }}
/>

<TouchableOpacity onPress={this.setValueLocally} activeOpacity={0.7} style={styles.button} >

    <Text style={styles.buttonText}> SAVE DATA </Text>

</TouchableOpacity>

<TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} style={styles.button} >

   <Text style={styles.buttonText}> DISPLAY DATA </Text>

</TouchableOpacity>
<View>
<Text style={styles.text}> UserName:{ this.state.getUsername} {"\n"}Password:{ this.state.getpass}{"\n"}
Age:{ this.state.getage}{"\n"}Gender{ this.state.getgender}{"\n"}Address:{ this.state.getaddress}</Text></View>


</View>
);
}
}

const styles = StyleSheet.create({

MainContainer :{
justifyContent: 'center',
alignItems: 'center',
flex:1,
margin: 10

},

TextInputStyle:{

textAlign: 'center',
height: 40,
width: '100%',
borderWidth: 1, 
borderColor: '#028b53',
borderRadius: 10
},

button: {

width: '100%',
height: 40,
padding: 10,
backgroundColor: '#4CAF50',
borderRadius:7,
marginTop: 10
},

buttonText:{
color:'#fff',
textAlign:'center',
},

text:{

fontSize: 20,
textAlign: 'center'
}

});