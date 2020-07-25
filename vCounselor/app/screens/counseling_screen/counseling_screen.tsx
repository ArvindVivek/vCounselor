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

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;




export class CounselingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sPerf: 0,
      isDone: String(false),
    }
  }


  getPrediction() {
    /**this.setState({sPerf:'clicked'});**/
    const pred = () => {
      return fetch('https://test-flask-boot.herokuapp.com/predict_api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'sex':0, 'age':0, 'guardian': 0, 'traveltime': 0, 'studytime': 0, 'failures':0, 'schoolsup': 0, 'famsup': 0, 'paid': 0, 'activities': 0, 'higher': 0, 'internet': 0, 'famrel': 0, 'freetime':0, 'goout':0, 'health': 0, 'absences': 0})
      })
      .then((response) => response.json())
      .then((responseJson)  => {
        this.setState({sPerf:JSON.stringify(responseJson.prediction), isDone: String(true)})
      })
      .catch((error) => {
        console.log(error);
        this.setState({isDone: "Error"});
      });
    }
  }

  render() {
    return (
      <Layout style={styles.container}>
        <ScrollView style = {styles.scrollView}>
          <Text style = {styles.title}>Please answer the necessary fields to receive your counseling</Text>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Gender: </Text>
            <Input placeholder = "Male or Female"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Age: </Text>
            <Input placeholder = "Age in years"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Commute Time: </Text>
            <Input placeholder = "Average commute time in minutes"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Study Time: </Text>
            <Input placeholder = "Average hours spent studying"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Class Failures: </Text>
            <Input placeholder = "Number of times you failed a class"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Extra Educational Support: </Text>
            <Input placeholder="Yes or No"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Family Support: </Text>
            <Input placeholder = "Yes or No"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Participation in Extra Paid Classes: </Text>
            <Input placeholder = "Yes or No"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Participation in Extracurriculars: </Text>
            <Input placeholder = "Yes or No"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Parents Having Higher Education: </Text>
            <Input placeholder = "Yes or No"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Access to Internet: </Text>
            <Input placeholder = "Yes or No"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Quality of Family Relationship: </Text>
            <Input placeholder = "Rate on a scale from 1-5"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Freetime: </Text>
            <Input placeholder = "Rate quality of free time from 1-5"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Social Life: </Text>
            <Input placeholder = "Rate on a scale from 1-5"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Health: </Text>
            <Input placeholder = "Rate on a scale from 1-5"></Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Absences: </Text>
            <Input placeholder = "Number of school absences this year"></Input>
          </View>
          <Button style = {styles.button} onPress = {() => this.getPrediction()} >Submit</Button>
        <Text style = {styles.textView}>Student Performance Rating: {this.state.sPerf}</Text>
        <Text>Hi {this.state.isDone}</Text>
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
  }
});