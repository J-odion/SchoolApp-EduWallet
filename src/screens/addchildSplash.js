import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default AddchildSplash = ({ navigation }) => {
  const imag = require("../assets/images/kneeling.png");

  return (
    <LinearGradient colors={["#D0FCFF", "#FFCDCF"]} className="flex-1">
      <SafeAreaView className="flex-1 bg-none px-5 py-8 justify-around ">
        <View className=" w-full justify-between px-5 py-5 ">
          <TouchableOpacity
            className=" justify-end flex-row w-full right-0 "
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="gap-y-5 px-5 justify-center items-center">
          <Image source={imag} className="h-[300px]  " resizeMode="contain" />
          <Text className="font-bold text-5xl text-center px-5">
            Add a child to your Eduwallet.
          </Text>

          <Text className=" text-center text-[15px] px-6 "> Adding a child will allow you to fund their balance for their meals, fees and other specifics items in their schools.</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("AddChild")}
            className="bg-[#9F1419] w-full rounded-full justify-center items-center p-3 "
          >
            <Text className="font-bold text-sm text-white">
              Ok, let’s add a child
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" w-full rounded-full justify-center items-center p-3 "
          >
            <Text className="font-extrabold text-sm text-black ">
              No, skip for now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
