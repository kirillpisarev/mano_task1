import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ProductsRepository} from '../../data/repository/products';

export const ProductList = () => {
  useEffect(() => {
    ProductsRepository.getProductById(4190).then(r => console.log(r.data));
  }, []);

  return (
    <View>
      <Text>List</Text>
    </View>
  );
};
