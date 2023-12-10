import {makeAutoObservable, runInAction} from 'mobx';
import {RootStore} from '../root';

export class ProductsStore {
  rootStore: RootStore;

  products = [];
  isLoading = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  loadProductsList() {
    this.isLoading = true;
    setTimeout(() => {
      runInAction(() => {
        this.isLoading = false;
      });
    }, 1000);
  }
}
