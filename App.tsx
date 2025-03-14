import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Text style={{fontWeight: 'bold'}}>Foo</Text>,
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Test...</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator();

function Root() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="HomeScreen" options={{
        headerTitle: () => <Text style={{fontWeight: 'bold', fontSize:30}}>Bla</Text>
      }} component={HomeScreen}/>
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
