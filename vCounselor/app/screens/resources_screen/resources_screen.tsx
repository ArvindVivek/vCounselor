import React from "react";
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
        <ScrollView>
          <Card style={styles.titleCard}>
            <Text>College Map Search</Text>
          </Card>
          <View style={styles.webViewStyle}>
            <WebView style={styles.webViewStyle} source={{ uri: COLLEGEMAPS_URL }} />
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
  titleCard: {
    width: deviceWidth-20,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  webViewStyle: {
    width: deviceWidth-20,
    alignItems: 'center',
    borderRadius: 150,
    height: deviceHeight/1.5,
  }
});