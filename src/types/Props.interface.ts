export interface PropsProduct {
  product: {
    id: number;
    name: string;
    image_link: string;
    rating: number;
    price: number;
    product_colors: [];
    product_link: string;
    description: string;
  };
}
