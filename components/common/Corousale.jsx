import { FlashList } from "@shopify/flash-list";
import React, { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const Corousale = ({ data }) => {
  const btnData = [
    { name: "Movies", id: 1 },
    { name: "Tv Shows", id: 2 },
    { name: "Trending", id: 3 },
    { name: "Popular", id: 4 },
  ];
  const width = Dimensions.get("screen").width;

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
      <View style={{ flex: 1 }} className="p-[10px] pt-10 justify-center items-center rounded-xl">
        <Carousel
          loop
          width={width}
          height={width}
          data={data}
          mode="parallax"
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
              className="rounded-xl"
            >
              <Image
                source={{ uri: item.poster }}
                resizeMode="cover"
                className="rounded-xl w-[95%] h-[450px] absolute"
              />
              <Text
                style={{textAlign: "center", fontSize: 30, color: "white" }}
              >
                {data.name}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Corousale;
