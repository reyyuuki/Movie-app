import { View, Text, Image } from 'react-native'
import React from 'react'

const BigCard = ({data}) => {
  return (
    <View>
      <Image source={{ uri: data}} className="w-[260px] h-[380px] rounded-2xl"/>
    </View>
  )
}

export default BigCard;