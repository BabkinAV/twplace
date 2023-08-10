import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
	query getOrders {
		orders {
        _id
        createdAt
        total
        products {
            refProductId
            quantity
            product {
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
    }
	}
`