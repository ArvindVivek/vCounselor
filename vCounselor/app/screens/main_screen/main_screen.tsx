import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
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
  ButtonGroup,
} from "@ui-kitten/components";
import {SliderBox} from "react-native-image-slider-box";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class MainScreen extends React.Component {
  
  state = {
    images: [
      "https://source.unsplash.com/1024x1000/?college",
      "https://source.unsplash.com/1024x1000/?book",
      "https://source.unsplash.com/1024x1000/?desk",
      "https://source.unsplash.com/1024x1000/?library",
    ]
  };

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
        <Image source={require('/home/arvind/Documents/Hackathons/Flarehacks-Modhacks2020/vCounselor/vCounselor/assets/vCounselorLogo.png')} style={styles.logo}></Image>
        <Text style={styles.introText}>
          Welcome to vCounselor, your personal counseling guidance app!
        </Text>
        <View style={styles.textPadding}>
        </View>
        <View style={styles.buttonPadding}/>
        <View style={styles.slideshow}>
          <SliderBox
            parentWidth={deviceWidth-30}
            sliderBoxHeight={deviceHeight/3.4}
            autoplay={true} 
            circleLoop={true} 
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            images={this.state.images}/>
        </View>
        <View style={styles.buttonPadding}/>
        <View style={styles.buttonRow}>
          <ButtonGroup>
            <Button onPress={() => this.navigateToCounselingScreen()} style={styles.buttonStyle}>
              Counseling
            </Button>
            <Button onPress={() => this.navigateToResourcesScreen()} style={styles.buttonStyle}>
              Resources
            </Button>
            <Button onPress={() => this.navigateToAboutScreen()} style={styles.buttonStyle}>
              About
            </Button>
          </ButtonGroup>
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
    height: 20,
    width: deviceWidth,
  },
  buttonPadding: {
    height:40,
    width: deviceWidth,
  },
  logo: {
    height: deviceWidth/2,
    width: deviceWidth/2,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    width: deviceWidth/3.25,
  },
  slideshow: {
    height: deviceHeight/3,
    alignItems: "center",
    justifyContent: "center",
  }
});
