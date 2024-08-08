import { View, Text } from "react-native";
import React from "react";
import AnimeItem from "./AnimeItem";

const AnimeStack = ({ data }) => {
  if (!data) return <View></View>;
  return (
    <View className="gap-5 w-full">
      {data.topUpcomingAnimes && (
        <AnimeItem data={data.topUpcomingAnimes} name={"Top Upcoming"} />
      )}
    </View>
  );
};

export default AnimeStack;
