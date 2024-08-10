import { Button, ScrollView, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

const Id = () => {
  const { id, title } = useLocalSearchParams();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const router = useRouter();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    console.log("Component Mounted");

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
  return (
    <View>
      <Stack.Screen
        options={{
          title: title.length > 20 ? title.substring(0, 17) + "..." : title,
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <FontAwesome6 name="chevron-left" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "black" },
        }}
      />
      <View className="w-full h-300px">
        <Video
          style={{ height: "100%", width: "100%" }}
          source={{
            uri: "https://www084.vipanicdn.net/streamhls/027e9529af2b06fe7b4f47e507a787eb/ep.1.1703905435.1080.m3u8",
          }}
          useNativeControls={true}
          shouldPlay={true}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Id;
