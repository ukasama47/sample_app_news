//import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import NewsArticle from "../components/NewsArticle";
import Constants from "expo-constants";
import axios from "axios";

const URI = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    //alert(Constants.manifest.extra.newsApiKey);
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(URI);
    console.log(response);
    setNews(response.data.articles);
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <NewsArticle
            imageURI={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
            //onPress={() => alert(`反応しています`)}
            onPress={() =>
            navigation.navigate("詳細ページ", { article: item })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    //alignItems: 'center',  //横の動き
    //justifyContent: 'flex-start',  //縦の動き
  },
});

//api key for api //83bd1243a84a404e9ff3a1600d0c7f85

//ERR link 飛べない   5/14
//改善 index.tsの改変で改善
