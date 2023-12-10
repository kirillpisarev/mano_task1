import {useEffect} from 'react';
import {Product} from '../../../data/repository/products/types';
import {useAppNavigation} from '../../../navigation';

export const useSetProductTitle = ({
  product,
}: {
  product: Product | undefined;
}) => {
  const navigation = useAppNavigation();
  useEffect(() => {
    navigation.setOptions({title: product?.title ?? ''});
  }, [navigation, product]);
};
