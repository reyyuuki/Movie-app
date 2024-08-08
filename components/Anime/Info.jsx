import { View, Text } from "react-native";
import React from "react";

const Info = ({ data }) => {
  return (
    <View className="gap-6 items-center w-full p-[10px]">
      <View className="gap-4 w-full">
        <Text className="text-[20px] text-white font-medium">
          {data.info.name}
        </Text>
        <View className="flex-row gap-2">
          <Text className="text-[16px] text-gray-500">
            {data.moreInfo.studios}
          </Text>
          <Text className="text-[16px] text-gray-500">
            {"| " + data.info.stats.duration}
          </Text>
          <Text className="text-[16px] text-gray-500">
            {"| " + data.info.stats.quality}
          </Text>
          <Text className="text-[16px] text-gray-500">
            {"| " + data.info.stats.type}
          </Text>
          <Text className="text-[16px] text-gray-500">
            {"| " + data.info.stats.rating}
          </Text>
        </View>
        <View>
          <View className="text-[16px] gap-4 flex-row flex-wrap text-gray-500">
            {data.moreInfo.genres.map((genre, index) => (
              <View className="p-[10px] border border-zinc-500/50 rounded-full">
                <Text key={index} className="text-[14px] text-gray-500">
                  {genre}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View className="gap-5">
        <Text className="text-[20px] text-white font-medium">
          Synopsis
        </Text>
        <Text className="text-[16px] text-gray-500">{data.info.description}</Text>
      </View>
    </View>
  );
};

export default Info;
