import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default AddChildScreen = ({ navigation }) => {
  const [next, setNext] = useState(true);

  const toggleNext = () => {
    {
      next ? setNext(false) : navigation.navigate("Success");
    }
  };

  return (
    <View className=" bg-[#FFFFFF] flex-1  px-5 items-center py-5 gap-5 ">
      <View className="w-full p-4 items-center gap-3 my-5 justify-center">
        <View className=" flex-row w-full items-center ">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text className="font-bold text-center flex-1 text-[24px]">
          Add a Child
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-1 flex-1 h-1 bg-[#282727] rounded-full px-5">
          <View className="bg-[#9F1419] flex-1 rounded-full h-1 "></View>
          <View
            className="bg-[#D9D9D9] flex-1 h-1 rounded-full "></View>
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
              <View className="my-8  justify-items-start align-top text-left px-5 ">
                <Text className="font-bold text-[18px]">
                 Childs Infomation
                </Text>
                <Text className="mt-5 text-left text-[14px] opacity-50">
                  
                     Please fill in the fields below correctly to match a childs record with the school ID.
                    
                </Text>
              </View>
              
                <View className="gap-5  mb-10 ">
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Childs First Name * *"
                    value={values.password}
                    className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-xl py-2 px-5 bg-white  "
                  />
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Childs Last Name * *"
                    value={values.password}
                    className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-xl py-2 px-5 bg-white  "
                  />

                  <View className="flex-row border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-xl py-2 px-5 bg-white  ">
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Child’s Date of Birth *"
                    value={values.password}
                    className="flex-1"
                  />
                  <TouchableOpacity>
                  <MaterialIcons name="calendar-month" size={24} color="#979797" />
                  </TouchableOpacity>
                  </View>

                  <View className="flex-row border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-xl py-2 px-5 bg-white  ">
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Child’s School Name *"
                    value={values.password}
                    className="flex-1"
                  />
                  <TouchableOpacity>
                  <MaterialIcons name="search" size={24} color="#979797" />
                  </TouchableOpacity>
                  </View>
                  
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Childs School Unique ID *"
                    value={values.password}
                    className=" border text-[#CCCCCC] border-[#CCCCCC] w-[280] rounded-xl py-2 px-5 bg-white  "
                  />
                </View>
           
              <TouchableOpacity
                onPress={toggleNext}
                className=" w-[280] py-3 rounded-full items-center justify-center mt-14 bg-[#9F1419]"
              >
                <Text className="text-white ">Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        
      </View>
    </View>
  );
};
