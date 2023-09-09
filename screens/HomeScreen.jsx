import React from "react";
import { TextInput } from "react-native";
import { Text, SafeAreaView, View, Image, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon as SearchIcon,
  CogIcon as AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-blue pt-10">
      <View className="flex-row pb-3 items-center  space-x-2 mx-1">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1693825252036-76714587d220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className=" flex-row space-x-2 items-center justify-center bg-gray-200 p-3 rounded-full">
          <Text className="font-bold text-gray-400 p-4 text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-2 px-1">
        <View className="flex-row space-x-1 flex-1 bg-gray-200 rounded-full ">
          <SearchIcon size={30} color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={30} color="#00CCBB" />
      </View>
      <ScrollView>
        <Categories/>

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid delivery"
          featuredCategory="fearured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
