import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '../../../stores';
import {useAppNavigation} from '../../../navigation';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

type Props = {
  id: number;
};

export const ProductListItem = observer<Props>(function ProductListItem({id}) {
  const {productsStore} = useStores();
  const navigation = useAppNavigation();
  const product = productsStore.getProductById(id);

  if (!product) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductItem', {productId: product.id})
      }>
      {!!product.images[0]?.thumbnail && (
        <Image
          source={{uri: product.images[0].thumbnail}}
          style={styles.thumbnail}
        />
      )}
      <Text style={styles.titleText}>{product.title}</Text>
      <Text style={styles.priceText}>{product.price}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '5%',
  },
  thumbnail: {
    aspectRatio: 1,
    width: '100%',
  },
  titleText: {
    marginTop: 6,
    marginHorizontal: '5%',
  },
  priceText: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: '5%',
  },
});
