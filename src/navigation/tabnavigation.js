import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Home from "../screens/App/Home";
import Transactions from "../screens/App/Transactions";
import Overview from "../screens/App/Overview/Overview";
import colors from "../themes/colors";
import DrawerContent from "../components/DrawerContent";

const DisplayHome = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="App" component={Home} />
    </Drawer.Navigator>
  );
};

const DisplayTransactions = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="transactions"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="transactions" component={Transactions} />
    </Drawer.Navigator>
  );
};

const DisplayOverview = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="overview"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="overview" component={Overview} />
    </Drawer.Navigator>
  );
};

export default TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => {
        return {
          // tabBarLabel: navigation.isFocused() ? route.name : "",
          tabBarActiveTintColor: colors.primary_blue,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.white,
            paddingLeft: 0,
            height: 55,
            paddingTop: 10,
            paddingBottom: 10,
            justifyContent: "center",
            width: "100%",
          },
          // tabBarItemStyle: { borderRadius: 40 },
          // tabBarLabelPosition: "beside-icon",
          tabBarLabelPosition: "below-icon",
          // tabBarActiveBackgroundColor: colors.quart_blue,
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={DisplayHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Overview"
        component={DisplayOverview}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Transactions"
        component={DisplayTransactions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="refresh" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


