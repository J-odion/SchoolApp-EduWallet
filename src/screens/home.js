import {
  Image,
  ImageBackground,
  TouchableOpacity,
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
            <TouchableOpacity onPress={() => navigation.navigate("HomeSlider")} className=" p-3 rounded-full items-center justify-center bg-[#9F1419]">
              <FontAwesome6
                name="circle-arrow-right"
                size={50}
                color="#D9D9D9"
                style={{top: 150,}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}