import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SplashHomeScreen = ({ navigation }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [
    {
      image: require("../assets/images/groupimg.png"),
      text: (
        <Text className="text-[55px] px-4 font-bold">
          Best App for Kids Schools & Parents
        </Text>
      ),
    },
    {
      image: require("../assets/images/twofaces.png"),
      text: (
        <Text className="text-3xl text-center px-1 font-bold">
          Send pocket money, top-up their lunch card, and even pay school fees -
          all in one convenient app.
        </Text>
      ),
    },
    {
      image:  require("../assets/images/slider2.png"),
      text: (
        <Text className=" justify-center item-center text-3xl text-center font-bold">
          Manage school finances together. Track spending, get alerts, and
          control accounts.
        </Text>
      ),
    },
  ];

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
    } else {
      // Handle navigation when all sections have been shown
      navigation.navigate("Login");
    }
  };

  return (
    <LinearGradient colors={["#D0FCFF", "#FFCDCF"]} className="flex-1">
      <SafeAreaView className="flex-1 bg-none justify-around ">
        <View className="flex-1 items-center w-full">
          <ImageBackground
            source={sections[activeSection].image}
            className="w-full flex-1 object-cover object-top"
            resizeMode="contain"
            blurRadius={0}
            style={{}}
          >
            <View className=" w-full ">
              <TouchableOpacity
                className=" justify-end flex-row w-full right-6 top-10 "
                onPress={() => navigation.navigate("Login")}
              >
                <MaterialIcons
                  name="close"
                  size={28}
                  color={activeSection > 0 ? "white" : "black"}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View className="w-full flex-1 gap-y-5 px-5 justify-around items-center">
            {sections[activeSection].text}
            <View className="justify-center items-center w-full  gap-x-2 py-4">
              <View className="justify-center items-center flex-row gap-x-2 py-4">
                {sections.map((_, index) => (
                  <View
                    className={
                      index === activeSection
                        ? "w-2 h-2 rounded-full bg-[#9F1419]"
                        : "w-2 h-2 rounded-full bg-[#979797]"
                    }
                  ></View>
                ))}
              </View>
              <TouchableOpacity
                onPress={handleNext}
                className="bg-[#9F1419] w-full rounded-full justify-center items-center p-3 "
              >
                <Text className="font-bold text-sm text-white">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SplashHomeScreen;
