import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useStores} from '../../stores';

export const ProductList = observer(function ProductList() {
  const {productsStore} = useStores();

  return (
    <View>
      <Text>List</Text>
      <Text>loading: {productsStore.isLoading.toString()}</Text>
      <TouchableOpacity onPress={() => productsStore.loadProductsList()}>
        <Text>fetch</Text>
      </TouchableOpacity>
    </View>
  );
});
