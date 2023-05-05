import styled from 'styled-components';

import LinePrice from '../assets/images/LinePrice.svg'

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid orange;
  width: 182px;
  padding: 10px;

  & .image-wrapper {
    margin-bottom: 20px;
  }

  & .price-wrapper {
    .price {
      ins {
        text-decoration: none;
        margin-right: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${props => props.theme.palette.colors.red};
      }
      del {
        text-decoration: none;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
				color: ${props => props.theme.palette.colors.grey100};
			
				position: relative;

					.price-line {
						position: absolute;
						top: 0;
						left: 0;
						display: inline-block;
						width: 100%;
						height: 100%;
						object-fit: cover;


					}

      }
    }
  }
`;
