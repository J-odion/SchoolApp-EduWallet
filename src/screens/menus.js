import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";

export default MenuScreens = ({ navigation }) => {
  return (
    <SafeAreaView className="justify-start z-90  flex-1 bg-[#9F1419] px-8 py-6">
      <StatusBar backgroundColor="#9F1419" />
      <TouchableOpacity onPress={() => navigation.goBack()} className="left-0 ">
        <MaterialIcons name="close" size={24} color="white" />
      </TouchableOpacity>
      <View>
        <Image
          className="w-[130px] h-[120px] mt-16 self-center"
          source={require("../assets/images/whiteLogo.png")}
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 top-14">
        <View className="broder-t-white border-b-[1px] gap-y-3 border-t-[1px] border-white py-5">
          <TouchableOpacity onPress={() => navigation.navigate("SKids")}>
            <View className="flex-row gap-x-7 items-center">
              <MaterialCommunityIcons
                name="human-male-female-child"
                size={24}
                color="white"
              />
              <Text className="text-white text-lg font-semibold">My Kids</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("WalletS")}>
            <View className="flex-row gap-x-7 items-center">
              <FontAwesome6 name="wallet" size={24} color="white" />
              <Text className="text-white text-lg font-semibold">
                My Wallet
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View className="flex-row gap-x-7 items-center">
              <FontAwesome name="graduation-cap" size={24} color="white" />
              <Text className="text-white text-lg font-semibold">Schools</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View className="flex-row gap-x-7 items-center">
              <MaterialIcons name="person" size={24} color="white" />
              <Text className="text-white text-lg font-semibold">
                My Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="broder-t-white border-b-[1px]  border-white py-5">
          <TouchableOpacity >
            <View className="flex-row gap-x-7 items-center">
              <FontAwesome5 name="globe" size={24} color="white" />
              <Text className="text-white text-lg font-semibold">App Tour</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="broder-t-white border-b-[1px] border-white py-5">
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View className="flex-row gap-x-7 items-center">
            <MaterialIcons name="logout" size={24} color="white" />
            <Text className="text-white text-lg font-semibold">Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className=" py-4">
        <Text className="font-thin text-white text-xs text-center">
          Version 1.0
        </Text>
      </View>
    </SafeAreaView>
  );
};
