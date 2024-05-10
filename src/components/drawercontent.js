import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../themes/colors";
import CustomHomeButton from "../utils/CustomHomeButton";
// import { LogoutUser } from "../screens/App/Utils/Helpers";
// import { logoutCall } from "../api";

export default ContentOfDrawer = (props) => {
  const {
    bvnVerified,
    idVerificationStatus,
    email,
    accessToken,
    dateOfBirth,
    firstName,
    lastName,
    profilePicture,
    hasProvidedBVN,
    phoneNumber,
    hasIdDocument,
  } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const [isLoggingOut, setIsLoggingOut] = useState(false);

  const profileNavigate = () => {
    props.navigation.navigate("Profile", {
      profilePicture,
      firstName,
      lastName,
      email,
      dateOfBirth,
      accessToken,
    });
  };

//   const handleLogout = async () => {
//     setIsLoggingOut(true);
//     await logoutCall();
//     setIsLoggingOut(false);
//     LogoutUser(props.navigation);
//   };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoContainer}>
            <View style={styles.imgContainer}>
              
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.title}>Emmanuel</Text>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Kids")
              }
              style={styles.drawerItem}
            >
              <View style={styles.drawerItemGroup}>
                <Ionicons
                  name="people"
                  color={colors.dark_grey}
                  size={24}
                  style={{ marginLeft: -8 }}
                />
                <Text style={styles.drawerLabel}>My Kids</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                color={colors.dark_grey}
                size={24}
                style={{ marginRight: -15 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("Settings")}
              style={styles.drawerItem}
            >
              <View style={styles.drawerItemGroup}>
                <Ionicons
                  name="settings-sharp"
                  color={colors.dark_grey}
                  size={24}
                  style={{ marginLeft: -8 }}
                />
                <Text style={styles.drawerLabel}>My Wallet</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                color={colors.dark_grey}
                size={24}
                style={{ marginRight: -15 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.navigation.navigate("Help")}
              style={styles.drawerItem}
            >
              <View style={styles.drawerItemGroup}>
                <Ionicons
                  name="settings-sharp"
                  color={colors.dark_grey}
                  size={24}
                  style={{ marginLeft: -8 }}
                />
                <Text style={styles.drawerLabel}>Help & Support</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                color={colors.dark_grey}
                size={24}
                style={{ marginRight: -15 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.navigation.navigate("TC")}
              style={styles.drawerItem}
            >
              <View style={styles.drawerItemGroup}>
                <Ionicons
                  name="document-text"
                  color={colors.dark_grey}
                  size={24}
                  style={{ marginLeft: -8 }}
                />
                <Text style={styles.drawerLabel}>Terms & Conditions</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                color={colors.dark_grey}
                size={24}
                style={{ marginRight: -15 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                props.navigation.navigate("About");
              }}
              style={styles.drawerItem}
            >
              <View style={styles.drawerItemGroup}>
                <MaterialCommunityIcons
                  name="message-alert"
                  color={colors.dark_grey}
                  size={24}
                  style={{ marginLeft: -8 }}
                />
                <Text style={styles.drawerLabel}>About Cudium</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                color={colors.dark_grey}
                size={24}
                style={{ marginRight: -15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          marginBottom: 24,
          marginHorizontal: 30,
        }}
      >
        <CustomHomeButton
          bgCol={colors.primary_blue}
          clickHandler={handleLogout}
          text={isLoggingOut ? "Logging out..." : "Logout"}
          isLoggingOut={isLoggingOut}
          icon={
            <MaterialCommunityIcons
              name="logout"
              color={colors.primary_blue}
              size={17}
            />
          }
          style={styles.logout}
          textStyle={{
            color: colors.primary_blue,
          }}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingHorizontal: 30,
  },
  userInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary_grey,
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    // width: "90%",
    // height: "90%",
  },

  bvnAlertContainer: {
    marginTop: 5,
    marginBottom: 30,
    backgroundColor: "rgba(233, 235, 237, .5)",
    padding: 15,
    borderRadius: 3,
  },

  bvnAlertText: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: colors.dark_grey,
    marginBottom: 5,
  },

  kycLinkText: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    lineHeight: 20,
    color: colors.primary_blue,
    textDecorationLine: "underline",
    textDecorationColor: colors.primary_blue,
  },

  userInfo: {
    paddingTop: 10,
    flexDirection: "column",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: 18,
  },
  userId: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  caption: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.secondary_grey,
  },
  profileBtn: {
    marginVertical: 20,
  },
  drawerSection: {
    paddingTop: 20,
  },
  drawerItem: {
    width: "100%",
    marginHorizontal: 0,
    paddingBottom: 26,
    fontWeight: "600",
    fontSize: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  drawerItemGroup: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  drawerLabel: {
    marginLeft: 14,
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
  },
  logout: {
    marginTop: 5,
    color: colors.primary_blue,
    fontWeight: "600",
    fontSize: 16,
  },
});
