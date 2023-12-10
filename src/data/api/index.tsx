import axios from 'axios';
import {API} from '../../constants';

export const apiClient = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    Authorization: API.AUTH_HEADER,
    StoreID: API.STORE_ID,
    UserAddressID: API.ADDRESS_ID,
  },
});

export type ApiResponse<T> = {
  code: 'ok';
  data: T;
  message?: string;
  request_data: {
    ended_at: string;
    started_at: string;
  };
  success: boolean;
};
