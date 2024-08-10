import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";

const BigCard = ({ data }) => {
  return (
    <View className="gap-7 items-center">
      <Image
        source={{ uri: data.poster }}
        className="w-[260px] h-[380px] rounded-2xl"
      />
      <Link
        href={{
          pathname: `/Player/[id]`,
          params: { id: `${data.id}`, title: `${data.name}` },
        }}
        asChild
      >
        <TouchableOpacity className="w-[160px] py-3 flex-row gap-3 flex items-center justify-center rounded-full bg-white/85 border border-zinc-500/50">
          <Text className="text-[18px] font-medium">Watch now</Text>
          <FontAwesome6 name="play" size={20} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default BigCard;
