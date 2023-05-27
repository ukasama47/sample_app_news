import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
//NewsScreen DetailScreen に道案内
import NewsScreen from "./screens/NewsScreen";
import DetailScreen from "./screens/DetailScreen";
import MapScreen from "./screens/MapScreen";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <View style={styles.upperSpace}></View>
      <Stack.Navigator screenOptions={{ headerStyle: styles.header }}>
        <Stack.Screen name="ニュース" component={NewsScreen} />
        <Stack.Screen name="詳細ページ" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: "50%",
    borderBottomColor: "#E7D8D9",
  },

  upperSpace: {
    height: 45,
    width: "100%",
    backgroundColor: "#8F8BA8",
  },
});
