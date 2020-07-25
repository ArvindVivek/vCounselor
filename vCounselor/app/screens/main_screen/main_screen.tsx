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
import {AboutScreen} from "../about_screen/about_screen";
import {default as CounselingScreen} from "../counseling_screen/counseling_screen"
import {ResourcesScreen} from "../resources_screen/resources_screen";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class MainScreen extends React.Component {
  navigateToCounselingScreen = () => {
    this.props.navigation.navigate("CounselingScreen");
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
      </Layout>
    );
  }
}

const MainNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  CounselingScreen: {
    screen: CounselingScreen,
    navigationOptions: {
      headerShown: true,
      headerStyle: {},
      headerStatusBarHeight: 0,
    }
  },
  ResourcesScreen: {
    screen: ResourcesScreen,
    navigationOptions: {
      headerShown: true,
      headerStyle: {},
      headerStatusBarHeight: 0,
    }
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      headerShown: true,
      headerStyle: {},
      headerStatusBarHeight: 0,
    }
  }
})

export default MainNavigator;

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
    height:60,
    width: deviceWidth,
  }
});
