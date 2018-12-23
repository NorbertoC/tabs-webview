import React from "react";
import {
  createBottomTabNavigator,
} from "react-navigation";
import Tab1Screen from "../screens/Tab1Screen";
import Tab2Screen from "../screens/Tab2Screen";
import Tab3Screen from "../screens/Tab3Screen";
import Tab4Screen from "../screens/Tab4Screen";

const DashboardTabRoutes = createBottomTabNavigator(
  {
    Tab1: { screen: Tab1Screen },
    Tab2: { screen: Tab2Screen },
    Tab3: { screen: Tab3Screen },
    Tab4: { screen: Tab4Screen },
  },
  {
    initialRouteName: "Tab1",
    tabBarOptions: {
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: "#fff"
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20,
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);

export default DashboardTabRoutes;
