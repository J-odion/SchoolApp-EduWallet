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

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function SelectChildScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 ">
      <View className="rounded-t-3xl align-top  bottom-0 flex-1 px-8 justify-start items-center pb-8">
        <View className=" flex-1 w-full ">
          <View className="flex-row items-center justify-between w-full pt-10">
            <Text className="font-bold text-center flex-1 text-lg">
              Select Child
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="py-5">
            <Text>Select a child to proceed with card top up.</Text>
          </View>

          <View className=" flex-1 justify-between w-full gap-y-2 ">
            <View className=" w-full gap-y-4">
              <TouchableOpacity onPress={()=>navigation.navigate("Payfees")} className="w-full">
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

              <TouchableOpacity onPress={()=> navigation.navigate("Payfees")} className="w-full">
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

          <TouchableOpacity
            // onPress={toggleNext}
            className=" w-full py-3 rounded-full items-center justify-center mt-14 bg-[#9F1419]"
          >
            <Text className="text-white ">Proceed</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>
  );
}
