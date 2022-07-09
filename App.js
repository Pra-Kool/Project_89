import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import DropDownPicker, * from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-web';
import { VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import * as React from 'react';
import {createSwitchNavigator, createAppcontainer} from 'react-navigation'

import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from './screens/LoadingScreen'
import DashboardScreen from './screens/DashboardScreen'

import * as firebase from 'firebase';
import {firebaseConfig} from './config';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app()
}

async addPost(){
 if(this.state.caption){
    let PostData={
      preview_image:this.state.previewImage,
      caption:this.state.caption,
      author:firebase.auth().currentUser.displayName,
      created_on:new Date(),
      auth_uid:firevase.auth().currentUser.displayName,
      profile_image:this.state.profile_image,
      likes:0
    };
    await firebase
    .database()
    .ref(
      "/posts/"+
      Math.random()
          .toString()
          .slice(2)
    )
    .set(postData)
    .them(function(snapshot){});
    this.props.setUpdateToTrue()
    this.props.navigation.navigate('Feed')
 } else{
  Alert.alert(
    "Error",
    "All Fields Are Required",
    [{Text:'OK', onPress:()=>console.log("OK Pressed")],
    {cancelable:false}
  );
 }
}

toggleSwitch(){
  const previous_state = this.state.isEnabled;
  const theme = !this.state.isEnabled ? 'dark' : 'light'
  var updates{}
  updates['/users/' + firebase.auth().currentUser.uid + '/current_theme']=theme
  firebase.database().ref().update(updates)
  this.setState({isEnabled:!previous_state,light_theme,:previous_state})
};

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppcontainer(AppSwitchNavigator)

export default function App(){
  return(
    <AppNavigator/>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.iconImage}
          ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.apptilteText}>New Post</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <ScrollView>
          <Image
            source={preview_images[this.state.previewImages]}
            style={styles.previewImage}
          ></Image>
        
        <View style={{height:
                        RFValue(this.state.dropDownHeight)}}>

          <DropDownPicker
            items={[
              {label: 'Image 1', value: 'image_1'},
              {label: 'Image 2', value: 'image_2'},
              {label: 'Image 3', value: 'image_3'},
              {label: 'Image 4', value: 'image_4'},
              {label: 'Image 5', value: 'image_5'},
              {label: 'Image 6', value: 'image_6'},
              {label: 'Image 7', value: 'image_7'}
            ]}
            defaultValue={this.state.previewImage}
            containerStyle={{
              heights: 40, 
              borderRadius: 20,
              marginBottom: 10
            }}
            onOpen={()=>{
              this.setState({dropDownHeight:170});
            }}
            onClose={()=>{
              this.setState({dropDownHeight:40})
            }}
            style={{backgroundColor:'transparent'}}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor:"#2a2a2a"
            labelStyle={{
                color:'white'
            }}
            arrowStyle={{
              color:'white'
            }}
            onChangeItem={item=>
            this.setState({
              previewImage: item.value
            })
          }
          
          />
          
        </View>
        <TextInput
          style={styles.inputFont}
          onChangeText={caption=>this.setState({caption
          })}
          placeHolder={'Caption'}
          placeHolderTextColor='white'
          />
          </ScrollView>
      </View>
      <View style={{flex:0.08}}/>
      
      

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
