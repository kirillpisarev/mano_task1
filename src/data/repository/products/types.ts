export type Product = {
  id: number;
  brand: string;
  title: string;
  price: string;
  images: ProductImage[];
};

type ProductImage = {
  attachment_type: 'other';
  class_name: 'Attachment';
  created_at: '2021-09-27T19:47:27.792Z';
  extra_props: [Object];
  extra_small: 'https://cdn.manoapp.com/variants/lxvivl2m6i950nu2u3bpcj1fsne1/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d';
  id: 4067;
  large: 'https://cdn.manoapp.com/variants/lxvivl2m6i950nu2u3bpcj1fsne1/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e';
  original: 'https://cdn.manoapp.com/lxvivl2m6i950nu2u3bpcj1fsne1';
  small: 'https://cdn.manoapp.com/variants/lxvivl2m6i950nu2u3bpcj1fsne1/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1';
  sort_order: null;
  thumbnail: 'https://cdn.manoapp.com/variants/lxvivl2m6i950nu2u3bpcj1fsne1/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81';
};
