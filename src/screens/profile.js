import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView className="justify-center items-center ">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
