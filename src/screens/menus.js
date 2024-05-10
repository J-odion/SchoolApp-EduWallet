import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";

export default function MenuScreens({ navigation }) {
  return (
    <SafeAreaView className="justify-start  flex-1 bg-[#9F1419] px-8 py-6">
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
          <View className="flex-row gap-x-7 items-center">
            <MaterialCommunityIcons
              name="human-male-female-child"
              size={24}
              color="white"
            />
            <Text className="text-white text-lg font-semibold">My Kids</Text>
          </View>

          <View className="flex-row gap-x-7 items-center">
            <FontAwesome6 name="wallet" size={24} color="white" />
            <Text className="text-white text-lg font-semibold">My Wallet</Text>
          </View>

          <View className="flex-row gap-x-7 items-center">
            <FontAwesome name="graduation-cap" size={24} color="white" />
            <Text className="text-white text-lg font-semibold">Schools</Text>
          </View>
          <View className="flex-row gap-x-7 items-center">
            <MaterialIcons name="person" size={24} color="white" />
            <Text className="text-white text-lg font-semibold">My Profile</Text>
          </View>
        </View>

        <View className="broder-t-white border-b-[1px]  border-white py-5">
          <View className="flex-row gap-x-7 items-center">
            <FontAwesome5 name="globe" size={24} color="white" />
            <Text className="text-white text-lg font-semibold">App Tour</Text>
          </View>
        </View>
      </View>

      <View className="broder-t-white border-b-[1px] border-white py-5">
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <View className="flex-row gap-x-7 items-center">
          <MaterialIcons name="logout" size={24} color="white" />
          <Text className="text-white text-lg font-semibold">Sign Out</Text>
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
