import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="bg-white"
    >
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Testing2"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Testing3"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Testing3"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Testing3"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Testing3"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Testing3"
      />
    </ScrollView>
  );
};

export default Categories;
