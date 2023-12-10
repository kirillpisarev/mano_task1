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
import {ImageView} from '../screens/ImageView';

export type MainStackParamList = {
  ProductList: undefined;
  ProductItem: {productId: number};
  ImageView: {imageUrl: string};
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
      <MainStack.Screen
        name="ImageView"
        component={ImageView}
        options={{
          presentation: 'transparentModal',
        }}
      />
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
