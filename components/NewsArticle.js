//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

//props 引数を渡す
const NewsArticle = ({ imageURI, title, subtext, onPress }) => {
  //subtitle in japanese
  var date = new Date(subtext);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var PublicationDate = year + "年" + month + "月" + day + "日";

  //title in japanese
  //var japaneseTitle = title;
  //<View style={styles.MapButton}></View>;

  const handlePress = () => {
    Alert.alert("Button Pressed");
  };

  return (
    <View>
      <TouchableOpacity style={styles.boxMap} onPress={handlePress}>
        <View style={styles.MapButton}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
            url: "https://illustimage.com/photo/dl/3699.png?20170906",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPressNews={onPress}>
        <View style={styles.textBox}>
          <Text numberOfLines={3} style={styles.text}>
            {title}
          </Text>
          <Text style={styles.subText}>{PublicationDate}</Text>
        </View>
        <View style={styles.pictureBox}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ url: imageURI }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsArticle;

const styles = StyleSheet.create({
  boxMap: {
    height: 100,
    width: "50%",
    borderColor: "#2F68C3",
    //borderWidth: 1,
    flexDirection: "row",
  },

  box: {
    height: 100,
    width: "100%",
    borderColor: "#8F8BA8",
    borderWidth: 1,
    flexDirection: "row",
  },

  textBox: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 16,
    justifyContent: "space-between",
  },

  pictureBox: {
    width: 100,
    backgroundColor: "",
  },

  text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "#2F68C3",
  },
});
