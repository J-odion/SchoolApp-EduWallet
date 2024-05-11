import {
  View,
  Text,
  TouchableOpacity,

  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView className="justify-center flex-1 items-center ">
      <StatusBar backgroundColor="#9F1419" />
      <View className="px-8 bg-[#9F1419] py-5 items-center justify-between rounded-b-3xl w-full">
        <View className=" bg-[#9F1419] flex-row items-center justify-between w-full">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome5
              className="font-extralight text-white "
              name="arrow-left"
              color="white"
              size={16}
            />
          </TouchableOpacity>
          <View className="justify-center flex-1">
            <Text className="text-white font-semibold text-xl text-center ">
              Profile
            </Text>
          </View>
        </View>
        <View className=" justify-center w-full items-center py-5 ">
          <View className=" p-5 rounded-full bg-[#EBA730] ">
            <Text className=" text-white text-[50px] font-bold ">PL</Text>
          </View>
          <Text className="font-bold text-lg text-white">Prodigy Dan</Text>
          <Text className=" text-xs text-white">prodigydan@gmail.com</Text>
        </View>
      </View>

      <View className=" w-full justify-start flex-1 px-8 gap-y-2 py-6 ">
        <Text className=" font-bold text-lg ">Edit your profile name</Text>
        <Text className="font-semibold text-xs">
          Quickly edit your profile and account information.
        </Text>
        <View className=" flex-1 gap-5 items-center mt-4 mb-10 w-full">
          <TextInput
            //   onChangeText={handleChange("password")}
            //   onBlur={handleBlur("password")}
            placeholder="Prodigy"
            //   value={values.password}
            className=" border text-[#CCCCCC] border-[#CCCCCC] w-full rounded-2xl py-2 px-5 bg-white  "
          />

          <TextInput
            //   onChangeText={handleChange("password")}
            //   onBlur={handleBlur("password")}
            placeholder="Dan"
            //   value={values.password}
            className=" border text-[#CCCCCC] border-[#CCCCCC] w-full rounded-2xl py-2 px-5 bg-white  "
          />

          <TextInput
            //   onChangeText={handleChange("password")}
            //   onBlur={handleBlur("password")}
            placeholder="prodigymee@gmail.com"
            //   value={values.password}
            className=" border text-[#CCCCCC] border-[#CCCCCC] w-full rounded-2xl py-2 px-5 bg-white  "
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          className=" w-full align-bottom py-3 rounded-full items-center bg-[#9F1419]"
        >
          <Text className="text-white ">Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
