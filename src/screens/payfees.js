import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PayfeesScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View className="px-8 flex-row py-5 items-center justify-between w-full">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              className="font-extralight text-black "
              name="arrow-left"
              size={16}
            />
          </TouchableOpacity>
          <View className="justify-center flex-1">
            <Text className="text-black font-semibold text-lg text-center ">
              Pay Fees
            </Text>
          </View>
        </View>

        <View className=" items-center rounded-b-3xl shadow-black shadow-xl drop-shadow-sm gap-y-2 py-3 ">
          <View className="w-[100px] h-[100px] rounded-full  bg-slate-400">
            <Image
              resizeMode="contain"
              source={require("../assets/images/postIMG1.png")}
              className="w-[100px] h-[100px] rounded-full "
            />
          </View>

          <Text className="font-bold text-xl">Tracy Daniel</Text>
          <Text className="font-bold text-sm">British Highschool Zambia</Text>
          <Text className="font-bold text-sm text-[#979797] ">
            School ID: BRI/18/2034
          </Text>
          <Text className="font-bold text-xs text-[#979797]">
            Available Bal
          </Text>
          <Text className="font-bold text-3xl">1200RWF</Text>
        </View>

        <View className="px-8  gap-y-6">
          <Text className="font-semibold text-lg">Select Action</Text>
          <TouchableOpacity>
            <LinearGradient
              className="rounded-xl flex-1 flex-row justify-between overflow-hidden p-0 "
              colors={["#A991D2", "#F7C0E9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View className="flex-row w-full p-0 ">
                <ImageBackground
                  resizeMode="cover"
                  className="w-[100%]"
                  source={require("../assets/images/cardBG.png")}
                >
                  <View className="p-6 gap-y-3 ">
                    <View className="h-8 justify-center items-center rounded-lg border border-white w-8">
                      <MaterialCommunityIcons
                        name="play"
                        size={24}
                        color="white"
                      />
                    </View>
                    <Text className="w-28 font-semibold text-white text-lg ">
                      Proceed with fees payment
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              className="rounded-xl flex-1 flex-row justify-between overflow-hidden p-0 "
              colors={["#EC709C", "#EC896D"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View className="flex-row w-full p-0 ">
                <ImageBackground
                  resizeMode="cover"
                  className="w-[100%]"
                  source={require("../assets/images/cardBG.png")}
                >
                  <View className="p-6 gap-y-3 ">
                    <View className="h-8 justify-center items-center rounded-lg border border-white w-8">
                      <MaterialCommunityIcons
                        name="play"
                        size={24}
                        color="white"
                      />
                    </View>
                    <Text className="w-28 font-semibold text-white text-lg ">
                      Proceed with fees payment
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
