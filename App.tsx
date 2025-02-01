import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Test...</Text>
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();

function ScreenWithTopTabs() {
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
      <RootStack.Screen name="TopTabsScreen" options={{
        headerTitleAlign: 'center',
        headerTitle: () => <Text style={{fontWeight:'bold', fontSize:25}}>ACME</Text>,
      }} component={ScreenWithTopTabs}/>
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
