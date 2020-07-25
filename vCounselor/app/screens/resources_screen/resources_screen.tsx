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
  Text,
  Card,
} from "@ui-kitten/components";
import { WebView } from 'react-native-webview';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

var COLLEGEMAPS_URL = 'https://nces.ed.gov/ipeds/collegemap/';

export class ResourcesScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Card style={styles.cardStyle}>
          <Text>College Map Search</Text>
        </Card>
        <WebView style={styles.webStyle} source={{ uri: COLLEGEMAPS_URL }} />
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
  cardStyle: {
    width: deviceWidth-20,
    alignItems: 'center',
    borderRadius: 15,
  },
  webStyle: {
    marginTop: 5,
    width: deviceWidth-23,
    height: 200,
  }
});