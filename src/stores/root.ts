import {productsRepository} from '../data/repository/products';
import {ProductsStore} from './products';

export class RootStore {
  productsStore: ProductsStore;

  constructor() {
    this.productsStore = new ProductsStore(this, productsRepository);
  }
}
