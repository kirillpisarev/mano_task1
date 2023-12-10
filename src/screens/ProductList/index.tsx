import React, {useCallback} from 'react';
import {Text, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {ProductListItem} from './components/ProductListItem';
import {Loading} from '../../shared/components/Loading';
import {useProductListData} from './hooks/useProducListData';

export const ProductList = observer(function ProductList() {
  const {productListIds, isLoading} = useProductListData();

  const renderItem: ListRenderItem<number> = useCallback(
    ({item: productId}) => <ProductListItem id={productId} />,
    [],
  );

  return (
    <FlatList
      data={productListIds}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.column}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={isLoading ? Loading : <Text>Nothing is found</Text>}
    />
  );
});

const styles = StyleSheet.create({
  column: {
    width: '50%',
  },
  listContent: {
    flexGrow: 1,
  },
});
