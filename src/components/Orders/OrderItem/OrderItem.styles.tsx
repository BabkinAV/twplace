import styled from 'styled-components';

export const StyledOrderItem = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  padding: 20px 90px;
  .order__heading {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
  }

  .order__date {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  .order__wrapper {
		margin-top: 20px;
  }

  .order__contents {
    display: flex;
    align-items: center;
		font-size: 14px;
		& > * {
			margin-right: 30px;
		}

  }


	.order__contents + .order__contents {
		margin-top: 20px;
	}


	

	.order__total {
		text-align: right;

		.order__price {
			font-weight: 600;
		}
	}

`;
