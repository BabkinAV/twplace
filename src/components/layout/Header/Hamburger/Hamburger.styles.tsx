import styled from 'styled-components';



export const StyledHamburger = styled.button`
	background-color: transparent;
  border-width: 0;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  padding: 0;
	display: inline-block;
	width: 77px;
	height: 77px;
	background: linear-gradient(96.78deg, #F64D4D -57.09%, #4D5EF6 101.17%);

/* main shadow */
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.12);
	transform: matrix(-1, 0, 0, 1, 0, 0);
	position: relative;
	cursor: pointer;

	& img{
		display: inline-block;
		position: absolute;
		top: 25px;
		right: 23.5px;
	}

`