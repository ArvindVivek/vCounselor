import React, {useState} from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
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
  Text, Card, Popover, Button, List
} from "@ui-kitten/components";
import { LineChart, YAxis} from 'react-native-svg-charts';
import {RatingInputScreen, currentsPerf} from "./ratinginput_screen";
import firebase from "firebase";
import DeviceInfo from 'react-native-device-info';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

let deviceID: any;
let data= [1,2,3,4,5];
let data2: any;

DeviceInfo.getUniqueId().then(uniqueId => {
  deviceID = uniqueId;
});

async function fetchData() {
  let fetchedData;
  await firebase
    .database()
    .ref(deviceID + "/preferences")
    .once("value")
    .then(function(snapshot) {
      fetchedData = snapshot.val();
      console.log(fetchedData);
    });
  data2 = fetchedData;
  console.log(data2);
}

export class CounselingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currentRating: currentsPerf
    };
  }

  navigateToRatingInputScreen = () => {
    this.props.navigation.navigate("RatingInputScreen");
  }

  navigateToInterestRecScreen = () => {
    this.props.navigation.navigate("InterestRecScreen");
  }

  render() {
    const contentInset = { top: 20, bottom: 20 }

    const renderToggleButton = () => (
      <Button style={
        {width: (deviceWidth-30)/2, alignItems: 'center',
          borderRadius: 15,
          height: 50,
          marginTop: 10,
          marginBottom: 10,}} onPress={() => this.setState({visible: true})}>
        Predict Next Rating
      </Button>
    );

    return (
      <Layout style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Virtual Counseling</Text>
            <Button onPress={() => this.navigateToRatingInputScreen()} style={styles.buttonStyle}>
              Input Your Rating Data
            </Button>
            <View style={styles.padding}></View>
            <Card style={styles.titleCard}>
              <Text style={styles.titleText}>vCounselor Rating History</Text>
            </Card>

            <Card style={styles.graphCard}>
              <View style={styles.graphView}>
                <YAxis
                  style={{margin: 10}}
                  data={data}
                  contentInset={contentInset}
                  svg={{
                  fill: 'white',
                  fontSize: 10,
                  }}
                  numberOfTicks={10}
                  animate={true}
                  formatLabel={(value) => `${value}`}
                />
                <LineChart
                  style={{ flex: 1, margin: 10}}
                  data={data}
                  svg={{ stroke: 'rgb(0, 102, 204)' }}
                  contentInset={contentInset}
                ></LineChart>
              </View>
            </Card>

            <View style={{flexDirection: 'row'}}>
              <Card style={
                {width: (deviceWidth-30)/2, alignItems: 'center',
                  borderRadius: 15,
                  marginTop: 10,
                  height: 50,
                  marginRight: 10,
                  marginBottom: 10,}}>
                  <Text>Current Rating: {this.state.currentRating}</Text>
              </Card>
              <View>
                <Popover
                  visible={this.state.visible}
                  placement={'bottom'}
                  anchor={renderToggleButton}
                  onBackdropPress={() => this.setState({visible: false})}>
                  <Layout style={styles.content}>
                    <Text>
                      Prediction: 18
                    </Text>
                  </Layout>
                </Popover>
              </View>
            </View>

            <View style={styles.padding}></View>
            <Button onPress={() => this.navigateToInterestRecScreen()} style={styles.buttonStyle}>
              Personalized Education/Career Guide
            </Button>
            <View style={styles.padding}></View>

          </View>
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
  graphView: {
    height: deviceHeight/4,
    width: deviceWidth-20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  graphCard: {
    justifyContent: 'center',
    height: deviceHeight/4,
    width: deviceWidth-20,
    alignItems: 'center',
    borderRadius: 15,
  },
  titleCard: {
    width: deviceWidth-20,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  buttonStyle: {
    width: deviceWidth-20,
    borderRadius: 15,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20,
  },
  padding: {
    height: 30,
  },
});