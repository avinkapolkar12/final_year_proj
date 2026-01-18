import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

import SettingsScreen from './screens/SettingsScreen';
import RoutinesScreen from './screens/RoutinesScreen';
import PeopleScreen from './screens/PeopleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={HomeScreen} />

        {/* Profile sub-pages */}
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Routines" component={RoutinesScreen} />
        <Stack.Screen name="People" component={PeopleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
