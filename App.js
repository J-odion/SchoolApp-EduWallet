import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import MainAppNavigator from "./src/navigation/appnav"
import HomeScreen from "./src/screens/home";
import LoginScreen from "./src/screens/login";
import ForgetPasswordScreen from "./src/screens/forgetpassword";
import SuccessScreen from "./src/screens/success";
import SignupScreen from "./src/screens/signup";
import DashboardScreen from "./src/screens/dashboard";
import MyWalletScreen from "./src/screens/mywallet";
import NotificationScreen from "./src/screens/notification";
import MyKidsScreen from "./src/screens/mykids";
import AddChildScreen from "./src/screens/addchild";
import AddchildSplash from "./src/screens/addchildSplash";
import TopupScreen from "./src/screens/topup";
import CardsScreen from "./src/screens/cards";
import SelectChildScreen from "./src/screens/selectchild";
import PayfeesScreen from "./src/screens/payfees";
import ProfileScreen from "./src/screens/profile";
import MenuScreens from "./src/screens/menus";
import SplashHomeScreen from "./src/screens/splashhome";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <MainAppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
