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
  Button,
} from "@ui-kitten/components";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class MainScreen extends React.Component {
  navigateToCounselingScreen = () => {
    this.props.navigation.navigate("CounselingScreen");
  }

  navigateToResourcesScreen = () => {
    this.props.navigation.navigate("ResourcesScreen");
  }

  navigateToAboutScreen = () => {
    this.props.navigation.navigate("AboutScreen");
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Text style={styles.introText}>
          Welcome to vCounselor, your personal counseling guidance app!
        </Text>
        <View style={styles.textPadding}>
        </View>
        <Text style={styles.introText}>
          How may we assist you today?
        </Text>
        <View style={styles.buttonPadding}>
        </View>
        <Button onPress={() => this.navigateToCounselingScreen()}>
          Counseling
        </Button>
        <View style={styles.buttonPadding}>
        </View>
        <Button onPress={() => this.navigateToResourcesScreen()}>
          Resources
        </Button>
        <View style={styles.buttonPadding}>
        </View>
        <Button onPress={() => this.navigateToAboutScreen()}>
          About
        </Button>
        <View style={styles.buttonPadding}>
        </View>
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
  introText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  textPadding: {
    height: 30,
    width: deviceWidth,
  },
  buttonPadding: {
    height:40,
    width: deviceWidth,
  }
});
