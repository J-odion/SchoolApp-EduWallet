import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";

import { MaterialIcons } from "@expo/vector-icons";

export default ForgetPasswordScreen = ({ navigation }) => {
  const [next, setNext] = useState(true);

  const toggleNext = () => {
    {next? setNext(false) : navigation.navigate('Success')}
};

  return (
    <View className=" bg-[#FFFFFF] flex-1  px-5 items-center py-5 gap-5 ">
      <View className="w-full p-4 items-center gap-3 my-5 justify-center">
        <View className=" flex-row w-full items-center ">
          <Text className="font-bold text-center flex-1 text-[24px]">
            {next ? "Forgot Password" : "New Password"}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-1 flex-1 h-1 bg-[#282727] rounded-full px-5">
          <View className="bg-[#9F1419] flex-1 rounded-full h-1 "></View>
          <View className={next? "bg-[#D9D9D9] flex-1 h-1 rounded-full ":"bg-[#9F1419] flex-1 h-1 rounded-full"}></View>
        </View>

        <Formik
          initialValues={{
            email: "",
            Newpassword: "",
            ConfirmNewpassword: "",
          }}
          onSubmit={(values) => console.log(values)}
          className="w-full "
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View className="items-center">
              <View className="my-8 items-center px-5 ">
                <Text className="mt-5 text-center text-[14px] opacity-50">
                  {next? ("Enter the email Address you used to setup your account. We’ll send an email with a reset Link to reset your password.")
                    : ("Setup your New Account Password.")}
                </Text>
              </View>
              {next?
              
              <View className="gap-5  mb-10 ">
                
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Email Address"
                  value={values.password}
                  className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-lg py-2 px-5 bg-white  "
                />


              </View>
              :
              <View className="gap-5  mb-10 "> 
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="New Password"
                  value={values.password}
                  className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-lg py-2 px-5 bg-white  "
                />


                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Confirm New Password"
                  value={values.password}
                  className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-lg py-2 px-5 bg-white  "
                />
              </View>
            }
              <TouchableOpacity
                onPress={toggleNext}
                className=" w-[280] py-3 rounded-full items-center justify-center bg-[#9F1419]"
              >
                <Text className="text-white ">Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View className="items-center">
          <View className="items-center mt-14">
            <TouchableOpacity>
              <Text className="font-bold text-[16px] text-black">
                Resend Reset Link
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
