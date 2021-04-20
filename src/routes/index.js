import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import User from '../pages/User';

const Route = createStackNavigator();

export default function routes() {
  return (
    <Route.Navigator>
      <Route.Screen name="Main" component={Main} />
      <Route.Screen name="User" component={User} />
    </Route.Navigator>
  );
}
