import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  createAppContainer,
  SafeAreaView,
  ThemeContext,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { default as appTheme } from "./custom-theme.json";
import { mapping } from "@eva-design/eva";
import { light as lightTheme } from "@eva-design/eva";
import { default as darkTheme } from "./dark-mapping.json";
import { default as customMapping } from "./custom-mapping.json";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { MainScreen } from "./app/screens/main_screen/main_screen";
import {CounselingScreen} from "./app/screens/counseling_screen/counseling_screen";
import {ResourcesScreen} from "./app/screens/resources_screen/resources_screen";
import {AboutScreen} from "./app/screens/about_screen/about_screen";
import {RatingInputScreen} from "./app/screens/counseling_screen/ratinginput_screen";
import {InterestRecScreen} from "./app/screens/counseling_screen/interestrec_screen";

import * as firebase from 'firebase';

const theme = { ...darkTheme };

const firebaseConfig = {
  apiKey: "AIzaSyCr7b21VCz1yH8CAnBGaLylHUo4zti589A",
  authDomain: "vcounselor-ff42d.firebaseapp.com",
  databaseURL: "https://vcounselor-ff42d.firebaseio.com",
  projectId: "vcounselor-ff42d",
  storageBucket: "vcounselor-ff42d.appspot.com",
  messagingSenderId: "509779694634",
  appId: "1:509779694634:web:30ab2fbb9198e33a8d1f53" 
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.disableYellowBox = true;
}

export default class App extends React.Component {
  fontsLoaded = false;

  async loadFonts() {
    await Font.loadAsync({
      "Metropolis-Regular": require("./assets/fonts/metropolis/Metropolis-Regular.ttf")
    });
    await Font.loadAsync({
      "Metropolis-Medium": require("./assets/fonts/metropolis/Metropolis-Medium.ttf")
    });
    await Font.loadAsync({
      "Metropolis-SemiBold": require("./assets/fonts/metropolis/Metropolis-SemiBold.ttf")
    });
    await Font.loadAsync({
      "Metropolis-Bold": require("./assets/fonts/metropolis/Metropolis-Bold.ttf")
    });
    await Font.loadAsync({
      "Metropolis-ExtraBold": require("./assets/fonts/metropolis/Metropolis-ExtraBold.ttf")
    });
    await Font.loadAsync({
      "Metropolis-Black": require("./assets/fonts/metropolis/Metropolis-Black.ttf")
    });
    await Font.loadAsync({
      Manrope: require("./assets/fonts/ManropeGX.ttf")
    });
    await Font.loadAsync({
      Inter: require("./assets/fonts/Inter.otf")
    });
    this.fontsLoaded = true;
  }

  async initializeApp() {
    await this.loadFonts();
  }

  async componentDidMount() {
    await this.initializeApp();
    await wait(1000);
    this.forceUpdate();
  }

  render() {
    if (!this.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <React.Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider
            mapping={mapping}
            theme={theme}
            customMapping={customMapping}
          >
            <AppNavigator theme={"dark"}/>
          </ApplicationProvider>
        </React.Fragment>
      );
    }
  }
}

export const StackNavigator = createStackNavigator({
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
      title: "Counseling",
    }
  },
  ResourcesScreen: {
    screen: ResourcesScreen,
    navigationOptions: {
      headerShown: true,
      title: "Resources"
    }
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      headerShown: true,
      title: "About",
    }
  },
  RatingInputScreen: {
    screen: RatingInputScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  InterestRecScreen: {
    screen: InterestRecScreen,
    navigationOptions: {
      headerShown: true,
      title: "Interest Guide",
    }
  }
});

export const AppNavigator = createAppContainer(StackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
