import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";

export default ApplicationNavigation = ({ children }) => {
  // const linking = {
  //   prefixes: ["School-edu://"],
  //   config: {
  //     screens: {
  //       // Notification: "notification",
  //     },
  //   },
  // };
  return (
    <NavigationContainer >{children}</NavigationContainer>
  );
};

