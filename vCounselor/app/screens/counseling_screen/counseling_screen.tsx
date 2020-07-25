import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
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
  Text, Card
} from "@ui-kitten/components";
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class CounselingScreen extends React.Component {
  render() {
    const data = [10,12,9,11,15,17];
    const contentInset = { top: 20, bottom: 20 }

    return (
      <Layout style={styles.container}>
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
        <Card style={styles.titleCard}>
          <Text>Current Rating: 17</Text>
        </Card>
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
});