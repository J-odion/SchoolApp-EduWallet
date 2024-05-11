import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";


export default DashboardScreen = ({ navigation }) => {

  const [opened, setOpened]=useState(false)

  const openDrawerMenue=()=>{
    navigation.openDrawer();
    setOpened(true)
  }
  return (
    <SafeAreaView className="flex-1 py-5">
      <StatusBar backgroundColor="#9F1419" />
      <View className=" bg-[#FFFFFF] flex-1 justify-start items-start gap-y-5 px-8 ">
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row items-center gap-5 ">
            <TouchableOpacity onPress={openDrawerMenue}>
            <Image
              className="h-9 w-9 bg-black rounded-full "
              resizeMode="contain"
              source={require("../assets/images/twofaces.png")}
            />
            </TouchableOpacity>
            
            <Text>Hi, Miss Pro</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>

          <MaterialCommunityIcons name="bell" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={require("../assets/images/dashB.png")}
          resizeMode="contain"
          className="w-full "
        >
          <View className="flex-row justify-between p-14 relative items-center rounded-xl  w-full ">
            <View className="text-white justify-center items-start ">
              <Text className=" text-white font-bold text-[12px] ">
                Your Card
              </Text>
              <Text className=" text-white font-bold text-lg ">
              $ 1.234
              </Text>
            </View>
            <View className="text-white justify-center items-start ">
              <Text className=" text-white font-bold text-[12px] "> Name</Text>
              <Text className=" text-white font-bold text-lg ">
                Daniel Pro
              </Text>
            </View>
          </View>
        </ImageBackground>
        
          <Text className="text-black font-bold text-lg text-center ">
            Quick Actions
          </Text>

        <View className="gap-y-4">
          <View className="flex-row mb-8 justify-between w-full ">
            <TouchableOpacity onPress={()=>navigation.navigate("TopupScreen")}>
              <View className="border border-[#9F1419] bg-[#F5F6FF] rounded-xl h-48  px-8 gap-y-4 justify-center items-center ">
                <FontAwesome5 name="wallet" size={30} color="#9F1419" />
                <Text className="text-[#9F1419] font-bold w-[78px] text-center ">
                  Top up your Wallet
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("SelectChildScreen")}>
              <View className="border border-[#9F1419] bg-[#F5F6FF] rounded-xl h-48  px-8 gap-y-4 justify-center items-center">
                <FontAwesome5 name="user-graduate" size={30} color="#9F1419" />
                <Text className="text-[#9F1419] font-bold w-[78px] text-center ">
                Fund Child Wallet
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between w-full ">
            <TouchableOpacity onPress={()=> navigation.navigate("SelectChildScreen")}>
              <View className="border bg-[#F5F6FF] border-[#9F1419] rounded-xl h-48  px-8 gap-y-4 justify-center items-center ">
                <FontAwesome5 name="school" size={30} color="#9F1419" />
                <Text className="text-[#9F1419] font-bold w-[78px] text-center ">
                School Fees
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("AddChild")}>
              <View className="border border-[#9F1419] bg-[#F5F6FF] rounded-xl h-48  px-8 gap-y-4 justify-center items-center">
                {/* <FontAwesome5 name="wallet" size={30} color="#9F1419" /> */}
                <Image
                  source={require("../assets/images/add-child.png")}
                  resizeMode="contain"
                  className="w-12"
                />
                <Text className="text-[#9F1419] font-bold w-[78px] text-center ">
                Add Child
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
