import {makeAutoObservable, runInAction} from 'mobx';
import {RootStore} from '../root';
import {ProductsRepository} from '../../data/repository/products';
import {Product} from '../../data/repository/products/types';

export class ProductsStore {
  rootStore: RootStore;

  productsRepository: ProductsRepository;

  products: Product[] = [];
  isLoading = false;

  constructor(rootStore: RootStore, productsRepository: ProductsRepository) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.productsRepository = productsRepository;
  }

  async loadProductsList() {
    this.isLoading = true;
    const {data} = await this.productsRepository.getProductList();
    runInAction(() => {
      this.products = data.data.items;
      this.isLoading = false;
    });
  }
}
