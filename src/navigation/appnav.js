import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

// import TabNavigation from "./TabNavigation";

import LoginScreen from "./screens/login";
import ForgetPasswordScreen from "./screens/forgetpassword";
import SuccessScreen from "./screens/success";
import SignupScreen from "./screens/signup";
import DashboardScreen from "./screens/dashboard";
import MyWalletScreen from "./screens/mywallet";
import NotificationScreen from "./screens/notification";
import MyKidsScreen from "./screens/mykids";
import AddChildScreen from "./screens/addchild";



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
//   const { accessToken, passcode } = useSelector((state) => state.user);

//   const initialRouteName = !accessToken
//     ? "Home"
//     : passcode
//     ? "Dashboard"
//     : "Home";
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
    //   initialRouteName={initialRouteName}
    initialRouteName="Home"
      screenOptions={{ headerShown: false, headerBackTitle: "" }}
    >
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Success"
        component={SuccessScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignupScreen}
      ></MainStack.Screen>

      <MainStack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={DashboardScreen}
      ></MainStack.Screen>

      <MainStack.Screen
        options={{ headerShown: false }}
        name="MyWallet"
        component={MyWalletScreen}
      ></MainStack.Screen>

      <MainStack.Screen
        options={{ headerShown: false }}
        name="Notification"
        component={NotificationScreen}
      ></MainStack.Screen>

      <MainStack.Screen
        options={{ headerShown: false }}
        name="Kids"
        component={MyKidsScreen}
      ></MainStack.Screen>

      <MainStack.Screen
        options={{ headerShown: false }}
        name="AddChild"
        component={AddChildScreen}
      ></MainStack.Screen>
      {/* 
      <AppStack.Screen
        name="AppHome"
        component={TabNavigation}
      ></AppStack.Screen> */}
    </MainStack.Navigator>
  );
};


