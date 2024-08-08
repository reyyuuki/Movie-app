import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

const SearchStack = () => {
  return (
    <View className="w-full flex-row items-center justify-between py-3 p-[10px]">
      <View className="w-[40px] h-[40px] rounded-lg items-center justify-center border border-zinc-500/50">
      <FontAwesome6 name="bars" size={25} color="white"/>
      </View>
        <View className="w-[250px] py-[8px] px-[20px]  flex-row items-center gap-5 bg-zinc-800/50 border border-zinc-500/50 rounded-3xl">
         <FontAwesome6 name="magnifying-glass" size={20} color="white"/>
         <TextInput placeholder='Seach Anime' placeholderTextColor={'white'} className="text-white text-[18px]" />
        </View>
    </View>
  )
}

export default SearchStack;