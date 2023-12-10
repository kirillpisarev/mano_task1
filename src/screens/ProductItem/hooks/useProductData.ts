import {useEffect} from 'react';
import {useStores} from '../../../stores';

export const useProductData = ({productId}: {productId: number}) => {
  const {productsStore} = useStores();
  const product = productsStore.getProductById(productId);

  useEffect(() => {
    if (!product) {
      productsStore.fetchProductById(productId);
    }
  }, [product, productId, productsStore]);

  return {
    product,
  };
};
