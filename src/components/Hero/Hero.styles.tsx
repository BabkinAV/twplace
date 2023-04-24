import styled from "styled-components";

export const StyledHero = styled.div`
	& .column-left {
		min-height: 300px;
		border: 1px solid green;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		background-color: #fff;
	}	

	& .column-right {
		border: 1px solid red;
		align-self: stretch;
	}
	
`