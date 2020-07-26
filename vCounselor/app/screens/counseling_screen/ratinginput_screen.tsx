import React from "react";
import { StyleSheet, View, Dimensions} from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  createAppContainer,
  SafeAreaView,
  ThemeContext,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Button,
  Input,
} from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios';
import firebase from "firebase";
import Constants from "expo-constants";

let deviceID = Constants.deviceId;

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

var url = 'https://test-flask-boot.herokuapp.com/predict_api';
var data = {'sex':0, 'age':0, 'guardian': 0, 'traveltime': 0, 'studytime': 0, 'failures':0, 'schoolsup': 0, 'famsup': 0, 'paid': 0, 'activities': 0, 'higher': 0, 'internet': 0, 'famrel': 0, 'freetime':0, 'goout':0, 'health': 0, 'absences': 0};

export var currentsPerf: any;

let rData = [];
fetchData();

async function fetchData() {
  firebase.database().ref(deviceID).once('value').then(function(snapshot) {
    console.log(snapshot.val());
    rData = snapshot.val();
    if(rData == null) {
      rData = [0];
    }
  });
}

async function pushData() {
  rData.push(17);
  firebase
    .database()
    .ref(deviceID)
    .set(rData);
}

export class RatingInputScreen extends React.Component {

  constructor(props) {
    super(props);
    fetchData();
    this.state = {
      sPerf: 0,
      gender: 0,
      age: 0,
      guardian:0,
      commuteTime: 0,
      studyTime:0,
      classFailures:0,
      eduSupport:0,
      famSupport:0,
      paidClases:0,
      ecs:0,
      higher: 0,
      internet:0,
      family:0,
      freeTime:0,
      socialLife:0,
      health:0,
      absences:0, 
    };
  }

  goToCounseling() {
    pushData();
    this.navigateToCounselingScreen();
  }

  navigateToCounselingScreen = () => {
    this.props.navigation.navigate("CounselingScreen");
  }

  setGender = (text: string) => {
    let e = 0;
    text = text.toLowerCase();
    if(text == "male") {
      e = 1;
    }
    else if(text == "female"){
      e = 0;
    }
    this.setState({gender: e});
  }

  setAge = (text: string) => {
    let num = parseInt(text);
    this.setState({age: num});
  }

  setGuardian = (text: string) => {
    text = text.toLowerCase();
    let num = 0;
    if(text == "father") {
      num  = 1;
    }
    else if (text == "both") {
      num = 2;
    }
    this.setState({guardian: num});
  }

  setCommuteTime = (text: string) => {
    let num = parseInt(text);
    let arr = [0, 15, 30, 45, 60]
    let min = num;
    let loc = 0

    for(let i = 1; i < arr.length; i++) {
      if (num - arr[i] < min){
        min = num - arr[i]
        loc = i
      }
    }

    this.setState({commuteTime: loc});
  }

  setStudyTime = (text: string) => {
    let hours = parseInt(text);
    let s = 1;
    if(hours > 2 && hours < 5) {
      s = 2;
    }
    else if (hours > 5 && hours < 10) {
      s = 3;
    }
    else if (hours > 10) {
      s = 4;
    }

    this.setState({studyTime: s})
  }

  setClassFails = (text: string) => {
    let num = parseInt(text);
    this.setState({classFailures: num});
  }

  setEduSupport = (text: string) => {
    if (text.toLowerCase() == "yes") {
      this.setState({eduSupport: 0});
    }
    else {
      this.setState({eduSupport: 1});
    }
  }

  setFamSupport = (text: string) => {
    if (text.toLowerCase() == "yes") {
      this.setState({famSupport: 1});
    }
    else {
      this.setState({famSupport: 0});
    }
  }

  setEPSupport = (text: string) =>{
    if (text.toLowerCase() == "yes") {
      this.setState({paidClasses: 1});
    }
    else {
      this.setState({paidClasses: 0});
    }
  }

  setECs = (text: string) => {
    if (text.toLowerCase() == "yes") {
      this.setState({ecs: 1});
    }
    else {
      this.setState({ecs: 0});
    }
  }

  setHigher = (text: string) => {
    if (text.toLowerCase() == "yes") {
      this.setState({higher: 0});
    }
    else {
      this.setState({higher: 1});
    }
  }

  setInternet = (text: string) => {
    if (text.toLowerCase() == "yes") {
      this.setState({internet: 1});
    }
    else {
      this.setState({internet: 0});
    }
  }

  setFamily = (text: string) => {
    let num = parseInt(text);
    this.setState({family: num});
  }

  setFreetime = (text: string) => {
    let num = parseInt(text);
    this.setState({freeTime: num});
  }

  setHealth = (text: string) => {
    let num = parseInt(text);
    this.setState({health: num});
  }

  setSocialLife = (text: string) => {
    let num = parseInt(text);
    this.setState({socialLife: num});
  }

  setAbsences = (text: string) => {
    let num = parseInt(text);
    this.setState({absences: num});
  }

  async setSPerf() {
    data['sex'] = this.state.gender;
    data['age'] = this.state.age;
    data['guardian'] = this.state.guardian;
    data['traveltime'] = this.state.commuteTime;
    data['studytime'] = this.state.studyTime;
    data['failures'] = this.state.classFailures;
    data['schoolsup'] = this.state.eduSupport;
    data['famsup'] = this.state.famSupport;
    data['paid'] = this.state.paidClasses;
    data['activities'] = this.state.ecs;
    data['internet'] = this.state.internet;
    data['famrel'] = this.state.family;
    data['freetime'] = this.state.freeTime;
    data['goout'] = this.state.socialLife;
    data['health'] = this.state.health;
    data['absences'] = this.state.absences;

    axios.post(url, data).then(res => {
      this.setState({sPerf: Math.round(res.data.prediction)});
    })
  }

  render() {
    return (
      <Layout style={styles.container}>
        <ScrollView style = {styles.scrollView}>
          <Text style = {styles.title}>Please answer the necessary fields to receive your counseling</Text>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Gender: </Text>
            <Input placeholder = "Male or Female" onChangeText={this.setGender}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Age: </Text>
            <Input placeholder = "Age in years" onChangeText = {this.setAge}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Guardian: </Text>
            <Input placeholder = "Mother, Father, or Both" onChangeText = {this.setGuardian}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Commute Time to School: </Text>
            <Input placeholder = "Average commute time to school in minutes" onChangeText = {this.setCommuteTime}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Study Time: </Text>
            <Input placeholder = "Average hours spent studying" onChangeText = {this.setStudyTime}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Class Failures: </Text>
            <Input onChangeText = {this.setClassFails} placeholder = "Number of times you failed a class"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Extra Educational Support: </Text>
            <Input placeholder="Yes or No" onChangeText = {this.setEduSupport}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Family Support: </Text>
            <Input placeholder = "Yes or No" onChangeText = {this.setFamSupport}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Participation in Extra Paid Classes: </Text>
            <Input placeholder = "Yes or No" onChangeText = {this.setEPSupport} ></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Participation in Extracurriculars: </Text>
            <Input placeholder = "Yes or No" onChangeText = {this.setECs}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Parents Having Higher Education: </Text>
            <Input placeholder = "Yes or No" onChangeText = {this.setHigher}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Access to Internet: </Text>
            <Input placeholder = "Yes or No" onChangeText = {this.setInternet}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Quality of Family Relationship: </Text>
            <Input placeholder = "Rate on a scale from 1-5" onChangeText = {this.setFamily}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Freetime: </Text>
            <Input placeholder = "Rate quality of free time from 1-5" onChangeText = {this.setFreetime}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Social Life: </Text>
            <Input placeholder = "Rate on a scale from 1-5" onChangeText = {this.setSocialLife}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Health: </Text>
            <Input placeholder = "Rate on a scale from 1-5" onChangeText = {this.setHealth}></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Unexcused Absences: </Text>
            <Input placeholder = "Number of unexcused school absences this year" onChangeText = {this.setAbsences}></Input>
          </View>
          <Button style = {styles.button} onPress = {() => this.setSPerf()} >Submit</Button>
        <Text style = {styles.rating}>Student Performance Rating: {this.state.sPerf}</Text>
        <Button style = {styles.button} onPress = {() => this.goToCounseling()} >Done</Button>
        </ScrollView>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 30,
  },
  textInput: {
    fontSize: 20,
    color:"white",
    borderColor: "white",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  textView: {
    marginVertical: 10,
  },
  field: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
    borderRadius: 15,
  },
  rating: {
    marginVertical: 20,
    textAlign: "center",
    fontSize:20,
  }
});