import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useAppRoute} from '../../navigation';
import {Loading} from '../../shared/components/Loading';
import {useProductData} from './hooks/useProductData';
import {useSetProductTitle} from './hooks/useSetProductTitle';

export const ProductItem = observer(function ProductItem() {
  const {
    params: {productId},
  } = useAppRoute<'ProductItem'>();
  const {product} = useProductData({productId});
  useSetProductTitle({product});

  if (!product) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {!!product.images[0]?.original && (
        <Image
          source={{uri: product.images[0].original}}
          style={styles.thumbnail}
        />
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
