import React, {useEffect} from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useStores} from '../../stores';
import {Product} from '../../data/repository/products/types';

export const ProductList = observer(function ProductList() {
  const {productsStore} = useStores();

  useEffect(() => {
    productsStore.loadProductsList();
  }, [productsStore]);

  return (
    <View>
      <Text>List</Text>
      <Text>loading: {productsStore.isLoading.toString()}</Text>
      <FlatList data={productsStore.products} renderItem={renderItem} />
    </View>
  );
});

const renderItem: ListRenderItem<Product> = ({item}) => (
  <Text key={item.id}>{item.brand}</Text>
);
