import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products($isFeatured: Boolean) {
    products(isFeatured: $isFeatured) {
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

export const SEARCH_PRODUCTS = gql`
  query productSearch($searchStr: String!) {
    productSearch(searchStr: $searchStr) {
      _id
      title
      color
      imageLink
      size
      price {
        priceCurrent
        priceOld
        discount
      }
    }
  }
`;
