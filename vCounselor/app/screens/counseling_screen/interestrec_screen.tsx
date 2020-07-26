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
  Text, Icon, Card, List, ListItem, Divider, IndexPath, Select, SelectItem
} from "@ui-kitten/components";
import firebase from "firebase";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const data1 = ['University of Southern California', 'Boston University', 'University of Florida', 'Northeastern University','Stony Brook Universty'];
const data2 = ['Diagnostic Medical Sonographers', 'EMTs and Paramedics', 'Home Health Aides and Personal Care Aides', 'Medical and Health Services Mangers','Medical Equipment Repairers'];
const data3 = ['Biology', 'Calculus BC', 'Chemistry'];

const forFire = [data1, data2, data3];

const renderItem1 = ({index}) => (
  <ListItem title={data1[index]}/>
);

const renderItem2 = ({index}) => (
  <ListItem title={data2[index]}/>
);

const renderItem3 = ({index}) => (
  <ListItem title={data3[index]}/>
);

async function pushData(rating) {
  firebase
    .database()
    .ref("Interests").child(0)
    .set(forFire);
}

pushData();

export class InterestRecScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null
    };
  }
    
  render() {
    const interests = [
      "Business",
      "Biomedical",
      "Computer Science",
      "Education",
      "Engineering",
      "Law",
      "Liberal Arts",
      "Psychology",
      ""
    ];

    const interests2 = [
        "Biomedical",
        "Computer Science",
        "Education",
        "Engineering",
        "Law",
        "Liberal Arts",
        "Psychology",
        "Business"
      ];
    
    const displayValue = interests[this.state.selectedIndex];

    const renderOption = (title) => (
      <SelectItem title={title}/>
    );

    return (
      <Layout style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Education and Career Recommendations</Text>

            <Select
                placeholder="Choose an interest" 
                style={styles.selectStyle}
                value={displayValue}
                selectedIndex={this.state.selectedIndex}
                onSelect={(item) => this.setState({selectedIndex: item})}>
                {interests2.map(renderOption)}
            </Select>

            <Card style={styles.titleCard}>
                <View style={styles.headingView}>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='book'
                />
                <Text style={styles.titleText}>Top Universities</Text>
                </View>
            </Card>
            <List
                style={styles.listStyle}
                data={data1}
                renderItem={renderItem1}
                ItemSeparatorComponent={Divider}
            >
            </List>

            <Card style={styles.titleCard}>
                <View style={styles.headingView}>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='briefcase'
                />
                <Text style={styles.titleText}>Careers to Explore</Text>
                </View>
            </Card>
            <List 
                style={styles.listStyle}
                data={data2}
                renderItem={renderItem2}
                ItemSeparatorComponent={Divider}
            >
            </List>

            <Card style={styles.titleCard}>
                <View style={styles.headingView}>
                <Icon
                    style={styles.icon}
                    fill='#8F9BB3'
                    name='book-open'
                />
                <Text style={styles.titleText}>Recommended AP Courses</Text>
                </View>
            </Card>
            <List 
                style={styles.listStyle}
                data={data3}
                renderItem={renderItem3}
                ItemSeparatorComponent={Divider}
            >
            </List>
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
    marginBottom: 10,
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
    height: 30,
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
  }
});
