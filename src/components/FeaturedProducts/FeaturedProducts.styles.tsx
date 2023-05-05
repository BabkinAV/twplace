import styled from "styled-components";

export const  StyledFeaturedProducts = styled.section`
	margin-top: 30px;



	& .products__gallery {
		padding-top: 15px;
		display: grid;
		grid-template-columns: repeat(6, min-content);
		/* Adjus template  with media queries here */
		justify-content: space-between;
		row-gap: 26px;
	}

`