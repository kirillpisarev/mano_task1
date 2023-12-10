import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useAppNavigation, useAppRoute} from '../../navigation';
import {Loading} from '../../shared/components/Loading';
import {useProductData} from './hooks/useProductData';
import {useSetProductTitle} from './hooks/useSetProductTitle';

export const ProductItem = observer(function ProductItem() {
  const {
    params: {productId},
  } = useAppRoute<'ProductItem'>();
  const navigation = useAppNavigation();
  const {product} = useProductData({productId});
  useSetProductTitle({product});

  const imageUrl = product?.images[0]?.original;

  if (!product) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {!!imageUrl && (
        <TouchableOpacity
          onPress={() => navigation.navigate('ImageView', {imageUrl})}>
          <Image source={{uri: imageUrl}} style={styles.thumbnail} />
        </TouchableOpacity>
      )}
      <View style={styles.productInfo}>
        <Text style={styles.titleText}>{product.title}</Text>
        <Text style={styles.brandText}>Brand: {product.brand}</Text>
        <Text style={styles.quantityText}>Quantity: {product.quantity}</Text>
        <Text style={styles.priceText}>{product.price}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '5%',
  },
  productInfo: {
    marginHorizontal: '2%',
  },
  thumbnail: {
    aspectRatio: 1,
    width: '100%',
  },
  titleText: {
    marginTop: 12,
    fontSize: 20,
  },
  brandText: {
    marginTop: 12,
    fontSize: 14,
  },
  quantityText: {
    marginTop: 12,
    fontSize: 14,
  },
  priceText: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
