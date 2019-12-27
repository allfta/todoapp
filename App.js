import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView
} from "react-native";
import Todo from "./Todo";

// Styles 변수
const { height, width } = Dimensions.get("window");

// View
export default class App extends React.Component {
  state = {
    newToDo: ""
  };
  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}> Todo </Text>
        <View style={styles.cart}>
          <TextInput
            style={styles.input}
            placeholder={"New To-Do"}
            value={newToDo}
            onChangeText={this._controlNewToDo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView>
            <Todo />
          </ScrollView>
        </View>
      </View>
    );
  }
  // 이거 함수이고 text를 아규먼트로 받는거다
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };
}

// 스타일
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f23657",
    alignItems: "center"
    // justifyContent: "center"
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 20
  },
  cart: {
    backgroundColor: "white",
    flex: 1,
    // 이런스킬개좋아 위에 width를 윈도우로 받아와서
    width: width - 25,
    // 약간 외곽둥글게
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    // 가장자리 쉐도잉주기
    // elevation 은 안드로이드에만 있고 ios에선 shadow
    // elevation: 5
    // 플랫폼별로 설정가능
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 10
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 18
  }
});
