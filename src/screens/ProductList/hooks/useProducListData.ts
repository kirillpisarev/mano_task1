import {useEffect} from 'react';
import {useStores} from '../../../stores';

export const useProductListData = () => {
  const {productsStore} = useStores();

  useEffect(() => {
    productsStore.fetchProductsList();
  }, [productsStore]);

  return {
    productListIds: productsStore.productListIds,
    isLoading: productsStore.isLoading,
  };
};
