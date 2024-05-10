import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
        <ScrollView className="flex-1 bg-white">
        <View className=" bg-[#FFFFFF] flex-1 py-5 justify-start items-start gap-y-5 px-8 ">
        <View className="flex-row items-center justify-between w-full">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              className="font-extralight text-black "
              name="arrow-left"
              size={16}
            />
          </TouchableOpacity>
          <View className="justify-center flex-1">
            <Text className="text-black font-semibold text-lg text-center ">
              Notification
            </Text>
          </View>
        </View>
        <View className="justify-center text-center w-full">
          <Text className="text-black font-semibold text-sm text-center ">
            New
          </Text>
        </View>
        <View className=" gap-3 justify-between w-full ">
          <TouchableOpacity className="w-full  shadow-black shadow-2xl">
            <View className="border bg-white border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
              <View className="flex-row items-center gap-x-4 ">
                <View className="flex-[0.9]">
                  <Text className="text-[#979797] font-bold text-[10px] ">
                    29 June 2021, 7.14 PM
                  </Text>
                  <Text className="text-black text-[15px] font-bold">
                    You Funded your kids account with $60.
                  </Text>

                  <Text className="text-[#979797] font-bold text-[10px] ">
                    Funding
                  </Text>
                </View>
              </View>
              <AntDesign name="upcircleo" size={24} color="#01B051" />
              <View className="w-2 h-2 bg-[#FF3333] rounded-full top-0 absolute right-2 "></View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="w-full  shadow-black shadow-2xl">
            <View className="border bg-white border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
              <View className="flex-row items-center gap-x-4 ">
                <View className="flex-[0.9]">
                  <Text className="text-[#979797] font-bold text-[10px] ">
                    29 June 2021, 7.14 PM
                  </Text>
                  <Text className="text-black text-[15px] font-bold">
                    You Funded your kids account with $60.
                  </Text>

                  <Text className="text-[#979797] font-bold text-[10px] ">
                    Funding
                  </Text>
                </View>
              </View>
              <AntDesign name="downcircleo" size={24} color="#FF3333" />
              <View className="w-2 h-2 bg-[#FF3333] rounded-full top-0 absolute right-2 "></View>
            </View>
          </TouchableOpacity>
        </View>

        <View className="justify-center text-center w-full">
          <Text className="text-black font-semibold text-sm text-center ">
            Recent
          </Text>
        </View>
        <View className=" gap-3 justify-between w-full ">
          <TouchableOpacity className="w-full  shadow-black shadow-2xl">
            <View className="border bg-white border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
              <View className="flex-row items-center gap-x-4 ">
                <View className="flex-[0.9]">
                  <Text className="text-[#979797] font-bold text-[10px] ">
                    29 June 2021, 7.14 PM
                  </Text>
                  <Text className="text-black text-[15px] font-bold">
                    Your kid spent $3 for Food item in School cafe.
                  </Text>

                  <Text className="text-[#979797] font-bold text-[10px] ">
                    Funding
                  </Text>
                </View>
              </View>
              <AntDesign name="upcircleo" size={24} color="#01B051" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="w-full  shadow-black shadow-2xl">
            <View className="border bg-white border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
              <View className="flex-row items-center gap-x-4 ">
                <View className="flex-[0.9]">
                  <Text className="text-[#979797] font-bold text-[10px] ">
                    29 June 2021, 7.14 PM
                  </Text>
                  <Text className="text-black text-[15px] font-bold">
                    Your kid spent $3 for Food item in School cafe.
                  </Text>

                  <Text className="text-[#979797] font-bold text-[10px] ">
                    Funding
                  </Text>
                </View>
              </View>
              <AntDesign name="downcircleo" size={24} color="#FF3333" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="w-full  shadow-black shadow-2xl">
            <View className="border bg-white border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
              <View className="flex-row items-center gap-x-4 ">
                <View className="flex-[0.9]">
                  <Text className="text-[#979797] font-bold text-[10px] ">
                    29 June 2021, 7.14 PM
                  </Text>
                  <Text className="text-black text-[15px] font-bold">
                    Your kid spent $3 for Food item in School cafe.
                  </Text>

                  <Text className="text-[#979797] font-bold text-[10px] ">
                    Funding
                  </Text>
                </View>
              </View>
              <AntDesign name="downcircleo" size={24} color="#FF3333" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="w-full  shadow-black shadow-2xl">
            <View className="border bg-white border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
              <View className="flex-row items-center gap-x-4 ">
                <View className="flex-[0.9]">
                  <Text className="text-[#979797] font-bold text-[10px] ">
                    29 June 2021, 7.14 PM
                  </Text>
                  <Text className="text-black text-[15px] font-bold">
                    Your kid spent $3 for Food item in School cafe.
                  </Text>

                  <Text className="text-[#979797] font-bold text-[10px] ">
                    Funding
                  </Text>
                </View>
              </View>
              <AntDesign name="downcircleo" size={24} color="#FF3333" />
            </View>
          </TouchableOpacity>


          <TouchableOpacity className="w-full  shadow-black shadow-2xl">
            <View className="border bg-white border-[#F5F6FF] rounded-xl h-18 flex-row w-full p-3 justify-between items-center ">
              <View className="flex-row items-center gap-x-4 ">
                <View className="flex-[0.9]">
                  <Text className="text-[#979797] font-bold text-[10px] ">
                    29 June 2021, 7.14 PM
                  </Text>
                  <Text className="text-black text-[15px] font-bold">
                    Your kid spent $3 for Food item in School cafe.
                  </Text>

                  <Text className="text-[#979797] font-bold text-[10px] ">
                    Funding
                  </Text>
                </View>
              </View>
              <AntDesign name="downcircleo" size={24} color="#FF3333" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
        </ScrollView>
    </SafeAreaView>
  );
};
