import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './view/Main';
import NewOrder from './view/NewOrder';
import NewSpent from './view/NewSpent';
import NewCostumer from './view/NewCostumer';
import PendingOrders from './view/PendingOrders';
import FinishedOrder from './view/FinishedOrder';
import SelectCostumer from './view/NewOrder/SelectCostumer';
import SelectType from './view/NewOrder/SelectType';
import SelectFlavor from './view/NewOrder/SelectFlavor';
import InsertAmmount from './view/NewOrder/InsertAmmount';
import SelectSize from './view/NewOrder/Size';
import SelectDate from './view/NewOrder/Date';
import ReviewOrder from './view/NewOrder/ReviewOrder';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none" >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="NewOrder" component={NewOrder} />
        <Stack.Screen name="SelectCostumer" component={SelectCostumer}/>
        <Stack.Screen name="SelectType" component={SelectType}/>
        <Stack.Screen name="SelectFlavor" component={SelectFlavor}/>
        <Stack.Screen name="SelectSize" component={SelectSize}/>
        <Stack.Screen name="InsertAmmount" component={InsertAmmount}/>
        <Stack.Screen name="SelectDate" component={SelectDate}/>
        <Stack.Screen name="ReviewOrder" component={ReviewOrder}/>
        <Stack.Screen name="NewSpent" component={NewSpent} />
        <Stack.Screen name="NewCostumer" component={NewCostumer} />
        <Stack.Screen name="PendingOrders" component={PendingOrders} />
        <Stack.Screen name="FinishedOrder" component={FinishedOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}