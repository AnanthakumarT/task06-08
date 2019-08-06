import React, { Component } from 'react';
 
import { StyleSheet, View, AsyncStorage, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
var SampleArray = [] ;export default class NewScreen extends Component {
       constructor(props) {
    
              super(props)
           
              this.state = {
           
                UserName: '',Password:'',
                Username:[ ],
           
              }
           
            }
            AddItemsToArray=()=>{
 
              //Adding Items To Array.
              this.state.Username.push( this.state.UserName.toString() );
           this.state.Username.push( this.state.Password.toString() );
              console.warn(this.state.Username);
              let user = this.state.Username;
         
              // Showing the complete Array on Screen Using Alert.
             
          }
          
    
 render(){
    
     return(

                <View style={styles.MainContainer}>
                     
                   <Text>{user}</Text>
          <TextInput
              
              placeholder="Enter Value here"
    
              onChangeText={TextInputValue => this.setState({ UserName : TextInputValue }) }
    
              style={{textAlign: 'center', marginBottom: 6, height: 45}}
          
          />

              <TextInput
              
              placeholder="Enter Value here"
    
              onChangeText={TextInputValue => this.setState({ Password : TextInputValue }) }
    
              style={{textAlign: 'center', marginBottom: 6, height: 45}}
          
          />
 
          <Button title="Click Here To Add Value To Array" onPress={this.AddItemsToArray} />
       
         
      </View>
 
        
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
 
    flex:1,
    justifyContent: 'center',
    margin: 15
 
  }
 
});
        
