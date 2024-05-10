import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

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

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
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
            component={DashboardScreen}
          ></Stack.Screen>

          <Stack.Screen
            options={{ headerShown: false }}
            name="MyWallet"
            component={MyWalletScreen}
          ></Stack.Screen>

          <Stack.Screen
            options={{ headerShown: false }}
            name="Notification"
            component={NotificationScreen}
          ></Stack.Screen>

          <Stack.Screen
            options={{ headerShown: false }}
            name="Kids"
            component={MyKidsScreen}
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

          <Stack.Screen options={{ headerShown: false}} name="Payfees" component={PayfeesScreen} ></Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
