import {makeAutoObservable, runInAction} from 'mobx';
import {RootStore} from '../root';
import {ProductsRepository} from '../../data/repository/products';
import {Product} from '../../data/repository/products/types';
import {normalize} from '../../utils/array';

export class ProductsStore {
  rootStore: RootStore;

  productsRepository: ProductsRepository;

  productListIds: number[] = [];
  productEntities: {[id: number]: Product} = {};
  isLoading = false;

  constructor(rootStore: RootStore, productsRepository: ProductsRepository) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.productsRepository = productsRepository;
  }

  async fetchProductsList() {
    this.isLoading = true;
    const {data} = await this.productsRepository.getProductList();
    runInAction(() => {
      const {ids, entities} = normalize(data.data.items);
      this.productListIds = ids;
      this.productEntities = entities;
      this.isLoading = false;
    });
  }

  async fetchProductById(id: number) {
    const {
      data: {data: product},
    } = await this.productsRepository.getProductById(id);
    runInAction(() => {
      this.productEntities[product.id] = product;
    });
  }

  getProductById(id: number) {
    return this.productEntities[id];
  }
}
