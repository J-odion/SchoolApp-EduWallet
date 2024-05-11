import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  
  const imag = require("../assets/images/bgimage.png");
  
  const Logo = require("../assets/images/whiteLogo.png");
  return (
    <View style={{ backgroundColor: "#9F1419", flex: 1 }}>
      
      <ImageBackground source={imag} style={{ flex: 1 }} resizeMode="cover">
        <View style={{ flex: 1, alignItems: "center",justifyContent: "center",}}>
          <Image source={Logo} resizeMode="cover" />
          <View>
            <Pressable onPress={() => navigation.push("HomeSlider")}>
              <FontAwesome6
                name="circle-arrow-right"
                size={50}
                color="#D9D9D9"
                style={{top: 150,}}
              />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
