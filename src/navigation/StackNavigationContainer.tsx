import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainRouteConfigMap } from "../config/MainRouteConfigMap";
import { ListScreen } from "../containers/listScreen/ListScreen";
import { DetailScreen } from "../containers/detailScreen/DetailScreen";

const Stack = createStackNavigator();

export const StackNavigationContainer = () =>
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={MainRouteConfigMap.List.name}
    >
      <Stack.Screen
        name={MainRouteConfigMap.List.name}
        component={ListScreen}
        options={MainRouteConfigMap.List.options}
      />
      <Stack.Screen
        name={MainRouteConfigMap.Detail.name}
        component={DetailScreen}
        options={MainRouteConfigMap.Detail.options}
      />
    </Stack.Navigator>
  </NavigationContainer>;
