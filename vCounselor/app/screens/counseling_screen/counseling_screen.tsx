import React from "react";
import { StyleSheet, View, Dimensions} from "react-native";
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
  Input,
} from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class CounselingScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <ScrollView style = {styles.scrollView}>
          <Text style = {styles.title}>Please answer the necessary fields to receive your counseling</Text>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          <View style = {styles.field}>
            <Text style = {styles.textView}>Bwoah: </Text>
            <Input>Hello</Input>
          </View>

          
  

          <Button style = {styles.button}>Submit</Button>
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
  scrollView: {
    marginHorizontal: 30,
  },
  textInput: {
    fontSize: 20,
    color:"white",
    borderColor: "white",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  textView: {
    marginVertical: 10,
  },
  field: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
  }
});