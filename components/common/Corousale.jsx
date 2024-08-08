import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Path } from "react-native-svg";

const Corousale = ({ data }) => {
  const width = Dimensions.get("screen").width;

  return (
    <View className="flex w-full gap-3">
      <View
        style={{ flex: 1 }}
        className="p-[10px] pt-5 justify-center h-[450px] items-center rounded-xl"
      >
        <Carousel
          loop
          width={width}
          height={width * 1.2}
          data={data}
          mode="parallax"
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <Link href={{pathname:`/[id]` , params:{id:`${item.id}`, title:`${item.name}`}}} asChild>
              <Pressable
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <LinearGradient
                  colors={["transparent", "#000000"]}
                  className="absolute left-0 w-[95%] h-[450px] z-30"
                />
                <Image
                  source={{ uri: item.poster }}
                  resizeMode="cover"
                  className="rounded-xl w-[95%] h-[450px]"
                />
                <Text className="z-40 text-center text-[20px] text-white">
                  {item.name}
                </Text>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default Corousale;
