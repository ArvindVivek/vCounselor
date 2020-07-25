import React from "react";
import { StyleSheet, View, Dimensions, Linking, Image } from "react-native";
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
  Card
} from "@ui-kitten/components";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const logo = require("../../../assets/vCounselorLogo.png");

const Header = (props) => (
    <View {...props}>
      <Text category='h6'>Created By</Text>
    </View>
  );

export class AboutScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
          <Image
            source={logo}
            style={{
               height: deviceWidth/2,
               width: deviceWidth/2,
            }}
          ></Image>
        <Text style={styles.title}>
              vCounselor
        </Text>
        <View style={styles.textPadding}/>
        <Card style={styles.cardStyle}>
            <Text style={styles.paragraph}>
                vCounselor is a guidance counseling application specifically targeting the high school audience.
                vCounselor aims to help those without access to counselors and career planning services by offering them a free, 
                personalized platform that gives them the information and resources needed to plan and succeed in life.
            </Text>
        </Card>
        <View style={styles.padding}/>
        <Card style={styles.cardStyle} header={Header}>
            <Text>Arvind Vivekanandan, Eric Wang, and Justin Yue</Text>
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
  link: {
    textDecorationLine: "underline",
    fontWeight: 'bold',
    fontSize: 18,
  },
  paragraph: {
      textAlign: 'center',
  },
  padding: {
      height: 40,
  },
  textPadding: {
      height: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  cardStyle: {
    width: deviceWidth-30,
    borderRadius: 20,
  }
});