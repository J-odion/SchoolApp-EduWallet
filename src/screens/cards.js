import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";

export default CardsScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
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
            Manage Card
          </Text>
        </View>
      </View>

      <View className="flex-1 w-full  py-5 justify-start items-start px-8 ">
        <View className="flex-1  gap-3 justify-center items-center w-full ">
          <View className=" w-full justify-center items-center gap-x-4 ">
            <Text className="text-black text-xl font-bold ">
              You will receive
            </Text>
            <Text className="text-black text-[35px] font-bold">$1200</Text>
          </View>

          <View className=" w-full flex-1 justify-between ">
            <View className="gap-5 mt-4 mb-10">
              <View className="gap-y-2 w-full  justify-center ">
                <Text className="text-black text-xl font-bold ">Details</Text>
              </View>

              <View className=" w-full justify-between">
                <View className="flex-row gap-6 items-center">
                  <View className=" gap-y-4  items-start ">
                    <Text className="text-[#BDBDBD] text-lg font-semibold ">
                      Name
                    </Text>

                    <Text className="text-[#BDBDBD] text-lg font-semibold ">
                      Bank
                    </Text>

                    <Text className="text-[#BDBDBD] text-lg font-semibold ">
                      Card Details
                    </Text>

                    <Text className="text-[#BDBDBD] text-lg font-semibold ">
                      Status
                    </Text>

                    <Text className="text-[#BDBDBD] text-lg font-semibold ">
                      Valid
                    </Text>
                  </View>

                  <View className=" gap-y-4  items-start ">
                    <Text className="text-black text-lg font-semibold ">
                      Daniel Pro
                    </Text>

                    <Text className="text-black text-lg font-semibold ">GTB</Text>

                    <Text className="text-black text-lg font-semibold ">
                      .... .... .... 2138
                    </Text>

                    <Text className="text-black text-lg font-semibold ">
                      Active
                    </Text>

                    <Text className="text-black text-lg font-semibold ">
                      2020 - 2025
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Dashboard")}
            className=" w-[180] align-bottom py-3 rounded-full items-center justify-center bg-none"
          >
            <Text className="text-[#9F1419] font-bold text-lg ">Delete Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
