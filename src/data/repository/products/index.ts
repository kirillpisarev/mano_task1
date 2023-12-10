import {apiClient, ApiResponse} from '../../api';
import {Product} from './types';

export const ProductsRepository = {
  getProductList: () => {
    return apiClient.post<ApiResponse<Product[]>>(
      'users/products?category_id=213',
    );
  },

  getProductById: (id: number) => {
    return apiClient.get<ApiResponse<Product>>(`users/products/${id}`);
  },
};
