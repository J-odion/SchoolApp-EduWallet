import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";


export default SuccessScreen = ({ navigation }) => {
  return (
    <View className=" bg-[#FFFFFF] flex-1 align-middle justify-center px-5 items-center py-5 gap-5 ">
      <View className="w-full p-4 items-center  my-5 justify-center">
        <View className="my-8 gap-y-6 items-center px-5 ">
          <Image source={require("../assets/images/thumbs-up.png")} />
          <Text className="font-bold text-center text-[24px]">
            Password Reset
          </Text>
          <Text className="mt-5 text-center text-[14px] opacity-50">
            Your have successfully changed your password. You can now proceed to
            login
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} className=" w-[280] py-3 rounded-full items-center justify-center bg-[#9F1419]">
            <Text className="text-white ">Proceed to login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
