import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import ForgetPasswordScreen from "../screens/forgetpassword";
import SuccessScreen from "../screens/success";
import SignupScreen from "../screens/signup";

import NotificationScreen from "../screens/notification";

import AddChildScreen from "../screens/addchild";
import AddchildSplash from "../screens/addchildSplash";
import TopupScreen from "../screens/topup";
import CardsScreen from "../screens/cards";
import SelectChildScreen from "../screens/selectchild";
import PayfeesScreen from "../screens/payfees";

import MenuScreens from "../screens/menus";
import SplashHomeScreen from "../screens/splashhome";
import TabNav from "./tabnavigation";

// const HelpComponent = () => {
//   const openWhatsapp = async () => {
//     let msg = `Hello! My name is ___ I have a complaint.`;
//     let phoneWithCountryCode = "2349039857490";
//     let mobile =
//       Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
//     if (mobile) {
//       let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
//       try {
//         await Linking.openURL(url);
//         console.log("WhatsApp Opened");
//       } catch (err) {
//         alert("Make sure WhatsApp installed on your device");
//       }
//     } else {
//       alert("Please insert mobile no");
//     }
//   };

//   return (
//     <TouchableOpacity style={{ marginRight: 10 }} onPress={openWhatsapp}>
//       <Image
//         source={require("../assets/images/whatsappLogo.png")}
//         style={{ width: 30, height: 30 }}
//       />
//     </TouchableOpacity>
//   );
// };

export default MainAppNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeSlider"
        component={SplashHomeScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Success"
        component={SuccessScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignupScreen}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={TabNav}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="Notification"
        component={NotificationScreen}
      ></Stack.Screen>

     

      <Stack.Screen
        options={{ headerShown: false }}
        name="AddKidSplash"
        component={AddchildSplash}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="AddChild"
        component={AddChildScreen}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="TopupScreen"
        component={TopupScreen}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="CardsScreen"
        component={CardsScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SelectChildScreen"
        component={SelectChildScreen}
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        name="Payfees"
        component={PayfeesScreen}
      ></Stack.Screen>

    

      <Stack.Screen
        options={{ headerShown: false }}
        name="Menus"
        component={MenuScreens}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
