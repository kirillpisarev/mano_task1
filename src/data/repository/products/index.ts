import {apiClient, ApiResponse} from '../../api';
import {Product} from './types';

export class ProductsRepository {
  getProductList() {
    return apiClient.post<
      ApiResponse<{
        current_count: number;
        items: Product[];
      }>
    >('users/products?category_id=213');
  }

  getProductById(id: number) {
    return apiClient.get<ApiResponse<Product>>(`users/products/${id}`);
  }
}

export const productsRepository = new ProductsRepository();
