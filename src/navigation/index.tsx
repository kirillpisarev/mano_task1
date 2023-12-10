// SPDX-License-Identifier: ice License 1.0

import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {ProductList} from '../screens/ProductList';
import {ProductItem} from '../screens/ProductItem';

export type MainStackParamList = {
  ProductList: undefined;
  ProductItem: {productId: number};
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="ProductList">
      <MainStack.Screen
        name="ProductList"
        component={ProductList}
        options={{title: 'Products'}}
      />
      <MainStack.Screen name="ProductItem" component={ProductItem} />
    </MainStack.Navigator>
  );
};

export const Router = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export const useAppNavigation = () => {
  return useNavigation<StackNavigationProp<MainStackParamList>>();
};

export const useAppRoute = <T extends keyof MainStackParamList>() =>
  useRoute<RouteProp<MainStackParamList, T>>();
