import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontWeight:'bold', fontSize:25}}>ACME</Text>,
};

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Test...</Text>
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();

function StartScreen() {
  return (
    <TopTab.Navigator initialRouteName="Screen1">
        <TopTab.Screen
          name="Screen1"
          component={HomeScreen}
          options={{tabBarLabel:'Screen 1'}} />
        <TopTab.Screen
          name="Screen2"
          component={HomeScreen}
          options={{tabBarLabel:'Screen 2'}} />
      </TopTab.Navigator>);
}

const RootStack = createNativeStackNavigator();

function Root() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Start" options={STACK_SCREEN_OPTIONS} component={StartScreen}/>
    </RootStack.Navigator>
  );
}
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

export default App;
