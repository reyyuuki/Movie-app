import React from "react";
import { Text, View } from "react-native";

const Corousale = () => {
  const btnData = [
    { name: "Movies", id: 1 },
    { name: "Tv Shows", id: 1 },
    { name: "Trending", id: 1 },
    { name: "Popular", id: 1 },
  ];
  return (
    <View className="flex w-full gap-3">
      <View className="flex flex-row justify-evenly p-[10px]">
        {btnData.map((item, index) => (
          <Text
            key={index}
            className="text-center text-white text-[16px] font-medium"
          >
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Corousale;
