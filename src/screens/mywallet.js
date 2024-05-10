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
import { Ionicons } from "@expo/vector-icons";

export default MyWalletScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 py-5 bg-white">
      <ScrollView className="flex-1 bg-white">
        <View className=" bg-[#FFFFFF] flex-1 justify-start items-start gap-y-5 px-8 ">
          <View className="flex-row items-center justify-between w-full">
            <Ionicons name="menu" size={24} color="black" />
            <Text className=" font-semibold text-lg ">My Wallet</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <MaterialCommunityIcons name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="font-bold text-3xl text-black">Wallet</Text>
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
                <Text className=" text-white font-bold text-[18px] ">
                  $ 1.234
                </Text>
              </View>
              <View className="text-white justify-center items-start ">
                <Text className=" text-white font-bold text-[12px] ">
                
                  Name
                </Text>
                <Text className=" text-white font-bold text-[18px] ">
                  Daniel Pro
                </Text>
              </View>
            </View>
          </ImageBackground>

          <View className=" flex-row justify-between w-full items-center ">
            <TouchableOpacity onPress={()=> navigation.navigate("MyWallet")} >
              <View className="bg-[#f5efff] justify-cente items-center  rounded-2xl py-2 px-8 ">
                <Image
                  source={require("../assets/images/3User.png")}
                  resizeMode="contain"
                  className="w-6"
                />
                <Text className="text-[12px] font-semibold">Top Up</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("SelectChildScreen")}>
            <View className="bg-[#ecf0ff] justify-cente items-center rounded-2xl py-2 px-7 ">
              <Image
                source={require("../assets/images/Swap.png")}
                resizeMode="contain"
                className="w-6"
              />
              <Text className="text-[12px] font-semibold">Pay Fees</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("CardsScreen")} >
            <View className="bg-[#f2f5f3] justify-cente items-center rounded-2xl py-2 px-8 ">
              <Image
                source={require("../assets/images/Folder.png")}
                resizeMode="contain"
                className="w-6"
              />
              <Text className="text-[12px] font-semibold">Cards</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View className=" flex-row justify-between w-full items-center ">
            <Text className="text-black font-bold text-lg text-center ">
              Activity
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Kids")}>
              <Text className="text-[#9F1419] font-bold text-sm text-center ">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="">
            <View className=" justify-between w-full gap-y-2 ">
              <TouchableOpacity className="w-full">
                <View className="border bg-white shadow-lg border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
                  <View className="flex-row items-center gap-x-4 ">
                    <Image
                      source={require("../assets/images/Logo.png")}
                      resizeMode="contain"
                      className="w-8"
                    />
                    <View>
                      <Text className="text-black font-bold text-lg ">
                        Funded
                      </Text>
                      <Text className="text-[#979797] font-bold text-[10px] ">
                        Completed
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[#01B051] font-bold text-lg ">
                    + $50
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="w-full">
                <View className="border bg-white shadow-lg border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
                  <View className="flex-row items-center gap-x-4 ">
                    <Image
                      source={require("../assets/images/Logo.png")}
                      resizeMode="contain"
                      className="w-8"
                    />
                    <View>
                      <Text className="text-black font-bold text-lg ">
                        Funded
                      </Text>
                      <Text className="text-[#979797] font-bold text-[10px] ">
                        Completed
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[#01B051] font-bold text-lg ">
                    + $50
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="w-full">
                <View className="border bg-white shadow-lg border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
                  <View className="flex-row items-center gap-x-4 ">
                    <Image
                      source={require("../assets/images/Logo.png")}
                      resizeMode="contain"
                      className="w-8"
                    />
                    <View>
                      <Text className="text-black font-bold text-lg ">
                        Funded
                      </Text>
                      <Text className="text-[#979797] font-bold text-[10px] ">
                        Completed
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[#01B051] font-bold text-lg ">
                    + $50
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
