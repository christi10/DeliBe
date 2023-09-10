import { useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants,setRestaurants] = useState([]);  
useEffect(() => { 
  sanityClient.fetch(`
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
      },
    }
  `)
  .then((data) => {
    setFeaturedCategories(data);
  })

})

  return (
    <ScrollView>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-gray-500">{description}</Text>
        <ArrowRightIcon color="#00CCBB" size={20}  />
      </View>
      <Text className="text-gray-500 px-4">View all</Text>
      <ScrollView horizontal className="pt-4">
       

       {restaurants.map((restaurant) => (
         <RestaurantCard
           key={restaurant._id}
           id={restaurant._id}
           imgUrl={restaurant.image}
         addess={restaurant.address}
         title={restaurant.name}
         dishes={restaurant.dishes}
         rating={restaurant.rating}
         short_description={restaurant.short_description}
         genre={restaurant.type?.name}
         long={restaurant.long}
         lat={restaurant.lat}/>
       ))}
      </ScrollView>
    </ScrollView>
  );
};

export default FeaturedRow;
