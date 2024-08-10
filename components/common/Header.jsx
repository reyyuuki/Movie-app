import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex flex-row justify-between py-[10px] pt-[40px] px-[20px]">
      <View className="flex flex-row gap-3">  
        <View className="flex gap-1">
          <Text className="text-[25px] font-semibold">
            DaizyTv
          </Text>
          <Text className="text-[16px] text-gray-600">Discover, Enjoy Anime Everywhere!</Text>
        </View>
      </View>
      <View className="w-[50px] h-[50px] rounded-full overflow-hidden border border-zinc-500/50">
          <Image
            className="object-cover w-full h-full"
            source={require("../../assets/images/Dark Anime Pfp Aesthetic Icon.jpg")}
          />
        </View>
    </View>
  );
};

export default Header;
