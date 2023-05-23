import styled from 'styled-components';


export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 182px;
  padding: 10px;

	transition: transform 0.2s;


	box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.12);
	position: relative;
	z-index: 5;
	background-color: #fff;

	@media (hover) {
		.button-wrapper {
			opacity: 0;
			transition: opacity 0.2s;
			min-height: 32px;
		}
		&:hover {
			transform: scale(1.2);
			z-index: 10;
			.button-wrapper {
				opacity: 1;
			}
		}
	}


  & .image-wrapper {
    position: relative;
    margin-bottom: 20px;

    .discount-wrapper {
      position: absolute;
      z-index: 10;
      right: 6px;
      top: 3px;
			border: 1px solid red;
			border-radius: 8px;
			padding: 2px 3px 2px 6px;

      .product-discount {
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }

  & .price-wrapper {
    .price {
      ins {
        text-decoration: none;
        margin-right: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${props => props.theme.palette.colors.red100};
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

  & .title-wrapper {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
		margin-bottom: 9px;

  }
	& .button-wrapper {
		margin-top: auto;
	}
`;
