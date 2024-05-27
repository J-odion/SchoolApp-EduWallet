import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import MainAppNavigator from "./src/navigation/appnav"


export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <MainAppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
