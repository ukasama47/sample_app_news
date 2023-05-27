//import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList} from 'react-native';
import NewsArticle from '../components/NewsArticle';
import Constants from "expo-constants";
import axios from "axios";

//map api uri 張る
const URI = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function MapScreen({navigation}) {

    const [map, setMaps] = useState([]);

    useEffect(() => {
        //alert(Constants.manifest.extra.newsApiKey);
        getMap();
    }, []);

    const getMap = async () => {
        const response = await axios.get(URI);
        console.log(response);
        setNews(response.data.getMap);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={map}
                renderItem = {({item}) => (
            <NewsArticle 
                //imageURI={item.urlToImage} 
                //title={item.title} 
                //subtext={item.publishedAt} 
                //onPress={() => alert(`反応しています`)}
                onPressNews={() => navigation.navigate("地図", {article: item})}
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
        backgroundColor: '#F5FCFF',
        //alignItems: 'center',  //横の動き
        //justifyContent: 'flex-start',  //縦の動き
    },
});

