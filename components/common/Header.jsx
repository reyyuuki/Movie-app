import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex flex-row border justify-between py-[10px] pt-[40px] px-[20px]">
      <View className="flex flex-row gap-3">
        <View className="w-[50px] h-[50px] rounded-full overflow-hidden border border-zinc-500/50">
          <Image
            className="object-cover w-full h-full"
            source={require("../../assets/images/Dark Anime Pfp Aesthetic Icon.jpg")}
          />
        </View>
        <View className="flex gap-1">
          <Text className="text-[16px] text-gray-600">Hello,</Text>
          <Text className="text-[20px] text-white font-semibold">
            Rey Yuuki!
          </Text>
        </View>
      </View>
      <View className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-zinc-500/50">
        <FontAwesome6 name="bell" size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;
