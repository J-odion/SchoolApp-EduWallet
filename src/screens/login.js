import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";

export default LoginScreen = ({ navigation }) => {
  return (
    <View className=" bg-[#FFFFFF] flex-1 align-middle justify-center px-5 items-center py-5 gap-5 ">
      <Image
        className="w-[140px] h-20"
        resizeMode="contain"
        source={require("../assets/images/colouredlogo.png")}
      />
      <View className="w-full p-4 items-center my-5 justify-center">
        <View className="gap-2 items-center mb-5">
          <Text className="font-bold text-[24px]">login</Text>
          <Text className="font-semibold text-[14px] opacity-50">
            Welcome back to Eduwallet !
          </Text>
        </View>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          className="w-full "
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View className="items-center">
              <View className="gap-5 mt-4 mb-10 ">
                <TextInput
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  placeholder="Username"
                  value={values.username}
                  className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-lg py-2 px-5 bg-white  "
                />
                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  placeholder="Password"
                  value={values.password}
                  className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-lg py-2 px-5 bg-white  "
                />
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} className=" w-[280] py-3 rounded-full items-center justify-center bg-[#9F1419]">
                <Text className="text-white ">Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <View className="items-center mt-5">
          
          <TouchableOpacity onPress={()=>navigation.replace('ForgetPassword')}>
            <Text className="font-bold text-[16px] mb-10">
            Forgot Password ?
            </Text>
            </TouchableOpacity>
          <View className="items-center">
            <Text className="font-bold text-[16px]">
              Don’t have an Account yet?
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <Text className="font-bold text-[16px] text-[#9F1419]">
              Create Account
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
