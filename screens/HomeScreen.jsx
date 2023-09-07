import { Text, SafeAreaView, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <Text>
        {/* {header} */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1693825252036-76714587d220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text className="font-bold text-gray-400 p-4 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-gray-400 p-4 text-xs">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
