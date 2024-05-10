import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default MyKidsScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 py-5 bg-white">
      <ScrollView className="flex-1 bg-white">
        <View className=" bg-[#FFFFFF] flex-1 justify-start items-start gap-y-5 px-8 ">
          <View className="flex-row items-center justify-between w-full">
            <Ionicons name="menu" size={24} color="black" />
            <Text className=" font-semibold text-lg ">My Kids</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <MaterialCommunityIcons name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddKidSplash")}
            className="bg-[#9F1419] w-full rounded-full justify-center items-center p-3 "
          >
            <Text className="font-bold text-sm text-white">Add New Child</Text>
          </TouchableOpacity>

          <View className=" justify-between w-full gap-y-2 ">
            <TouchableOpacity className="w-full">
              <View className="border bg-white shadow-lg border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
                <View className="flex-row items-center gap-x-3 w-full px-1 ">
                  <Image
                    source={require("../assets/images/postIMG1.png")}
                    resizeMode="cover"
                    className="w-20 h-20 rounded-lg"
                  />
                  <View className="gap-y-1 flex-[0.9] w-full">
                    <Text className="text-black font-bold text-[18px] ">
                      Tracey Daniel
                    </Text>
                    <Text className="text-black font-bold text-[14px] ">
                      British Highschool Zambia
                    </Text>

                    <Text className="text-[#979797] font-bold text-[10px] ">
                      School ID: BRI/18/2034
                    </Text>
                    <Text className="text-[#979797] font-bold text-[10px] ">
                      Bal: $1200
                    </Text>
                  </View>
                </View>

                <AntDesign name="rightcircleo" size={22} color="#01B051" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-full">
              <View className="border bg-white shadow-lg border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
                <View className="flex-row items-center gap-x-3 w-full px-1 ">
                  <Image
                    source={require("../assets/images/postIMG.png")}
                    resizeMode="cover"
                    className="w-20 h-20 rounded-lg"
                  />
                  <View className="gap-y-1 flex-[0.9] w-full">
                    <Text className="text-black font-bold text-[18px] ">
                      Prince Daniel
                    </Text>
                    <Text className="text-black font-bold text-[14px] ">
                      British Highschool Zambia
                    </Text>

                    <Text className="text-[#979797] font-bold text-[10px] ">
                      School ID: BRI/18/2034
                    </Text>
                    <Text className="text-[#979797] font-bold text-[10px] ">
                      Bal: $900
                    </Text>
                  </View>
                </View>

                <AntDesign name="rightcircleo" size={22} color="#01B051" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
