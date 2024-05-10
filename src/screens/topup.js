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

export default TopupScreen = ({ navigation }) => {
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
            Top Up
          </Text>
        </View>
      </View>
      <View className="flex-1 w-full  py-5 justify-start items-start px-8 ">
        <View className="flex-1  gap-3 justify-between w-full ">
          <View className=" w-full justify-center items-center gap-x-4 ">
            <Text className="text-black text-xl font-bold ">
              You will receive
            </Text>
            <Text className="text-black text-[35px] font-bold">$1200</Text>
          </View>

          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            className="w-full flex-1 justify-between "
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View className="items-center w-full flex-1 justify-between ">
                <View className="gap-5 mt-4 mb-10">
                  <View className="gap-y-2 w-full  justify-center ">
                    <Text>Enter Amount</Text>
                    <TextInput
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      placeholder="Enter Amount"
                      value={values.password}
                      className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-lg py-2 px-5 bg-white  "
                    />
                  </View>

                  <View className="gap-y-2  ">
                    <Text>Select Payment Method</Text>
                    <TextInput
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      placeholder="Card Name"
                      value={values.password}
                      className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-lg py-2 px-5 bg-white  "
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Dashboard")}
                  className=" w-[180] align-bottom py-3 rounded-full items-center justify-center bg-[#9F1419]"
                >
                  <Text className="text-white ">Top Up</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};
