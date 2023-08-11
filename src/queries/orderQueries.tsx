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
						totalProductPrice
            product {
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
    }
	}
`