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
  Text, Icon, Card, List, ListItem, Divider, IndexPath, Select, SelectItem, Button, Input
} from "@ui-kitten/components";
import axios from 'axios';

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

let data_json = {'interest':'major_of_interst'}

var WEBSCRAPE_URL = 'https://test-flask-boot.herokuapp.com/web_scrape';

export class InterestRecScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      schools: "",
      jobs: "",
      classes: "",
      interest: "",
    };
  }

  getRecs = () => {
    axios.post(WEBSCRAPE_URL, {'interest': this.state.interest}).then(res => {
      console.log(res.data.schools);
      /*this.setState({selectedIndex: selected});*/
      this.setState({classes: res.data.classes, jobs: res.data.jobs, schools: res.data.schools});
    })
    .catch(error => {
      console.log(error.response)
    });
  }

  setInterest = (text: string) => {
    this.setState({interest: text});
  }
    
  render() {

    return (
      <Layout style={styles.container}>
        <ScrollView>
          <Text style = {styles.title}>Education and Career Recommendations</Text>

          <View style={styles.container}>
          <Input style={styles.buttonStyle} placeholder = "Enter major of interest" onChangeText = {this.setInterest}></Input>

          <Button style={styles.buttonStyle} onPress = {this.getRecs}>Enter</Button>
          <View style={styles.padding}></View>

            <Card style = {styles.titleCard}>
            <View style={styles.headingView}>
                  <Icon
                      style={styles.icon}
                      fill='#8F9BB3'
                      name='book'
                  />
                  <Text style={styles.titleText}>Top Universities</Text>
                  </View>
                  <Text style = {styles.textView}>{this.state.schools}</Text>
            </Card>

            <Card style = {styles.titleCard}>
              <View style={styles.headingView}>
                  <Icon
                      style={styles.icon}
                      fill='#8F9BB3'
                      name='briefcase'
                  />
                  <Text style={styles.titleText}>Careers to Explore</Text>
                  </View>

                <Text style = {styles.textView}>{this.state.jobs}</Text>

            </Card>

            <Card style = {styles.titleCard}>
            <View style={styles.headingView}>
                  <Icon
                      style={styles.icon}
                      fill='#8F9BB3'
                      name='book-open'
                  />
                  <Text style={styles.titleText}>Recommended AP Courses</Text>
                  </View>
            <Text style = {styles.textView}>{this.state.classes}</Text>
            </Card>
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
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  titleCard: {
    width: deviceWidth-20,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20,
  },
  padding: {
    height: 20,
  },
  headingView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  listStyle: {
    width: deviceWidth-20,
  },
  selectStyle: {
      width: deviceWidth/1.5,
  },
  inputView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textView: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15,
    textAlign: "center",
  },
  buttonStyle: {
    width: deviceWidth-20,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});