import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { AniWatchAnimeId } from "../../hooks/UseApi";
import BigCard from "../../components/Anime/BigCard";
import { FontAwesome6 } from "@expo/vector-icons";
import Info from "../../components/Anime/Info";


const Anime = () => {
  const { id, title } = useLocalSearchParams();
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const FetchData = async () => {
      const response = await AniWatchAnimeId(id);
      if (response) {
        console.log(response);
        setData(response);
      }
    };
    FetchData();
  }, []);

  if (!data) return <Text>Loading...</Text>;
  return (
    <ScrollView className="flex-grow">
      <Stack.Screen
        options={{
          title: title,
          headerLeft: () => (
            <TouchableOpacity onPress={router.back} >
            <FontAwesome6 name="chevron-left" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign:'center',
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <View className="justify-center gap-16 items-center mt-12">
        <BigCard data={data.anime.info.poster} />
        <Info data={data.anime}/>
      </View>
    </ScrollView>
  );
};
export default Anime;
