import { ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import VideoPlayer from "react-native-video-player";

const Id = () => {
  const { id, title } = useLocalSearchParams();
  const router = useRouter();
  return (
    <ScrollView className="flex-grow">
      <Stack.Screen
        options={{
          title: title.length > 20 ? title.substring(0, 17) + "..." : title,
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <FontAwesome6 name="chevron-left" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "black" },
        }}
      />
      <View className="flex-1 justify-center items-center">
        <VideoPlayer
          video={{
            uri: "https://www084.vipanicdn.net/streamhls/027e9529af2b06fe7b4f47e507a787eb/ep.1.1703905435.1080.m3u8",
          }}
          videoWidth={1200}
          videoHeight={600}
          resizeMode="contain"
          autoplay={false}
          controls={true}
        />
      </View>
    </ScrollView>
  );
};

export default Id;
