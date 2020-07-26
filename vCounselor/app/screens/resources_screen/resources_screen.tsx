import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, Linking } from "react-native";
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
  Calendar, Button
} from "@ui-kitten/components";
import { WebView } from 'react-native-webview';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

var COLLEGEMAPS_URL = 'https://nces.ed.gov/ipeds/collegemap/';
var docLink = "https://docs.google.com/document/d/e/2PACX-1vTWuoPwa6I3wRerPH7UngxD1DXXN09SMOq3DnOXM-XPOfdfoWNCN5OmNOQ8JUNekCMkSFudQQ8mlAP_/pub";

export class ResourcesScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <ScrollView>
          <Card style={styles.titleCard}>
            <Text style={styles.titleText}>College Map Search</Text>
          </Card>
          <View style={styles.webViewStyle}>
            <WebView style={styles.webViewStyle} source={{ uri: COLLEGEMAPS_URL }} />
          </View>
          <View style={styles.dividerView}></View>
          <Card style={styles.titleCard}>
            <Text style={styles.titleText}>Calendar</Text>
          </Card>
          <Card style={styles.titleCard}>
            <Calendar>
            </Calendar>
          </Card>
          <View style={styles.dividerView}></View>
          <Card style={styles.titleCard}>
            <Text style={styles.titleText}>Important Links</Text>
          </Card>
          <Button style={styles.titleCard} onPress={()=>{Linking.openURL(docLink)}}>Go to Master Doc</Button>
        </ScrollView>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  },
  dividerView: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});