import styled from 'styled-components';

export const StyledHeaderLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	gap: 5px;
	cursor: pointer;
	position: relative;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
		color: #000;
		text-transform: capitalize;
  }
	& .badgeCounter {
		border-radius: 50%;
		height: 12px;
		width: 12px;
		background-color: red;
		position: absolute;
		top: 3px;
		right: 3px;

	}
	& .badgeCounter span{
		font-size: 7px;
	}
`;
