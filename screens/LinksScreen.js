import React from 'react';
import { ScrollView,View, StyleSheet,Alert,Button ,Text,TextInput,TouchableOpacity,AsyncStorage} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import HomeScreen from './HomeScreen';
const data =require('../example_1.json');
import { Table, Row, TableWrapper,Rows } from 'react-native-table-component';

export default class  LinksScreen extends React.Component {


  componentDidMount = () => AsyncStorage.getItem('loggedIn')
   
  constructor(props) {  
    //constructor to set default state  
    super(props);  
    this.state = { 
      
        username:'',Age:'',Gender:'',PNO:'',Address:'',



    

       

    };  
}  

  handle=()=>{

    var json=data.details.fruit;
    Alert.alert('json text',json)
    console.log('updated')
    
  }
  
  logOut=async()=>{
await AsyncStorage.clear();
this.props.navigation.navigate('Home');
   }

  render(){
    const state=this.state;
     

      
      return (
    <View>

      <Text></Text>
      <Button title="click" onPress={this.handle}/>
      <TextInput  
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
        placeholder={'Enter Any value'}  />
        <TextInput  
        value={this.state.Age}  
        onChangeText={Age => this.setState({ Age })}  
        placeholder={'Enter Any value'}  />
        <TextInput  
        value={this.state.Gender}  
        onChangeText={Gender => this.setState({Gender })}  
        placeholder={'Enter Any value'}  /><TextInput  
        value={this.state.PNO}  
        onChangeText={PNO => this.setState({ PNO })}  
        placeholder={'Enter Any value'}  /><TextInput  
        value={this.state.Address}  
        onChangeText={Address => this.setState({ Address })}  
        placeholder={'Enter Any value'}  />
      <Button title="GOTO HOME" onPress={()=>this.props.navigation.navigate('HomeScreen',
      
                {userName: this.state.username,
                  Age: this.state.Age,
                  Gender: this.state.Gender,
                  PNO: this.state.PNO,
                  Address: this.state.Address
      
      
      
      })}/>
     <View>
      <Button title="Logout" onPress={this.logOut}/>
      </View>
    </View>
  );
}
}
