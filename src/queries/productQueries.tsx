import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      title
      price {
        priceCurrent
        priceOld
        discount
      }
      imageLink
      size
      color
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($productId: ID!) {
    product(_id: $productId) {
      _id
      title
      price {
        priceCurrent
        priceOld
        discount
      }
      imageLink
      size
      color
    }
  }
`;
