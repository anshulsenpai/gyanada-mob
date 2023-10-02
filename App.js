import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import { AuthProvider, useAuth } from "./authContext";
import ProfileScreen from "./screens/ProfileScreen";
import { Ionicons, Octicons } from "@expo/vector-icons";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import StudentForm from "./screens/StudentForm";
import HistoryScreen from "./screens/HistoryScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import SettingScreen from "./screens/SettingScreen";
import StudentDetailPage from "./screens/StudentDetailsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const BASE_IP = "http://13.232.230.93";

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "space-between",
          alignItems: "center",
          height: 60,
          backgroundColor: "#FFF",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="ios-home"
              size={size}
              color={focused ? "#000" : "#C1C1C1"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Add Student"
        component={StudentForm}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="add-circle-sharp"
              size={30}
              color={focused ? "#000" : "#C1C1C1"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Octicons
              name="history"
              size={size}
              color={focused ? "#000" : "#C1C1C1"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="settings"
              size={size}
              color={focused ? "#000" : "#C1C1C1"}
            />
          ),
        }}
      />

      {/* Add more Tab.Screen components for other screens */}
    </Tab.Navigator>
  );
};

const RootApp = () => {
  const { state } = useAuth();

  const [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    poppins_semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    poppins_bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.token ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
        <Stack.Screen name="Student Form" component={StudentForm} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="StudentDetailPage" component={StudentDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <AuthProvider>
    <RootApp />
  </AuthProvider>
);
