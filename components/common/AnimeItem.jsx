import { View, Text, Image } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";

const AnimeItem = ({ data, name }) => {
    console.log(data);
  return (
    <View className="p-[10px] pt-5 gap-5">
      <Text className="text-[25px] text-white">{name}</Text>
      <View className="flex gap-2">
      <FlashList
        data={data}
        renderItem={({item, index}) => (
          <View key={index} className="gap-2 p-[10px] items-center ">
            <Image
              source={{ uri: item.poster }}
              className="w-[140px] h-[200px] rounded-xl object-cover"
            />
            <Text className="text-white text-[16px]">{item.name.length > 15 ? item.name.substring(0,12) + "..." : item.name}</Text>
          </View>
        )}
        horizontal
        estimatedItemSize={200}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
      </View>
    </View>
  );
};

export default AnimeItem;
