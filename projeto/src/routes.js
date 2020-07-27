import * as React from 'react';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './view/Main';
import NewOrder from './view/NewOrder';
import NewSpent from './view/NewSpent';
import NewCostumer from './view/NewCostumer';
import PendingOrders from './view/PendingOrders';

import BottomNavigator from './components/BottomNavigator';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" headerMode="none" >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="NewOrder" component={NewOrder} />
          <Stack.Screen name="NewSpent" component={NewSpent} />
          <Stack.Screen name="NewCostumer" component={NewCostumer} />
          <Stack.Screen name="PendingOrders" component={PendingOrders} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}