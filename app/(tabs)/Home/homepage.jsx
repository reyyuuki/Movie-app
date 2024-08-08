import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../../components/common/Header";
import Corousale from "../../../components/common/Corousale";
import { AniWatchHome, fetchMovieTrending } from "../../../hooks/UseApi";
import SearchStack from "../../../components/common/SearchStack";
import AnimeStack from "../../../components/common/AnimeStack";

export default function homepage() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const Fetching = async () => {
      try {
        const data = await AniWatchHome();
        if (data) {
          console.log(data);
          setResult(data);
        } else {
          console.log("No data received");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    Fetching();
  }, []);
  if (!result) return <View></View>;
  return (
    <ScrollView className='flex-grow'>
      <Header />
      <SearchStack/>
      {result.spotlightAnimes && <Corousale data={result.spotlightAnimes} />}
      {result && <AnimeStack data={result}/>}
    </ScrollView>
  );
}
