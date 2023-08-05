import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { Provider, useSelector } from "react-redux"; // Import Provider and useSelector here
// import { persistor, store } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        {/* Add more screens if necessary */}
      </Stack.Navigator>
    </NavigationContainer>
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
