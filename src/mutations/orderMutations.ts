import { gql } from '@apollo/client';


export const PLACE_ORDER = gql`
  mutation PlaceOrder($orderContents: [placedItemType]) {
    placeOrder(orderContents: $orderContents) {
      orderId
    }
  }
`;
