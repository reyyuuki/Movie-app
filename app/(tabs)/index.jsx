import { Image, StyleSheet, Platform, View , Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="w-[700px] h-[300px] bg-red-500 z-20">
      <Text className="text-red-500">Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name:{
    color:"white",
    fontSize:20,
  }
});