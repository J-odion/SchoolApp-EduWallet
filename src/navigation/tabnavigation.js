import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../themes/colors";

import DashboardScreen from "../screens/dashboard";
import MyWalletScreen from "../screens/mywallet";
import MyKidsScreen from "../screens/mykids";
import ProfileScreen from "../screens/profile";

import MenuScreens from "../screens/menus";

const ShowDashboard = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <MenuScreens {...props} />}
    >
      <Drawer.Screen name="DashboardS" component={DashboardScreen} />
    </Drawer.Navigator>
  );
};

const ShowWallet = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="MyWallet"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <MenuScreens {...props} />}
    >
      <Drawer.Screen name="WalletS" component={MyWalletScreen} />
    </Drawer.Navigator>
  );
};

const ShowKids = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Kids"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <MenuScreens {...props} />}
    >
      <Drawer.Screen name="SKids" component={MyKidsScreen} />
    </Drawer.Navigator>
  );
};

const ShowProfile = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <MenuScreens {...props} />}
    >
      <Drawer.Screen name="ProfileS" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => {
        return {
          tabBarLabel: navigation.isFocused() ? route.name : "",
          tabBarActiveTintColor: colors.primary_red,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.white,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "center",
            height: 70,
            paddingTop: 10,
            paddingBottom: 10,
            justifyContent: "center",
            width: "100%",
            elevation: 10,
            toExponential: 3, 
            shadowColor: "black", 
            shadowOffset: 4,
            shadowOpacity: 4, 
            shadowRadius: 10,
          },
          tabBarItemStyle: {width: "100%", borderRadius: 40, paddingLeft: 10 },
          tabBarLabelPosition: "below-icon",
          tabBarActiveBackgroundColor: colors.light_red,
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={ShowDashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="My Wallet"
        component={ShowWallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="My Kids"
        component={ShowKids}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="human-male-female-child"
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ShowProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
