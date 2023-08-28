import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  

	border: double 2px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white), 
	linear-gradient(to right, #f64d4d, #4d5ef6);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  /* I've used padding so you can see the edges of the elements. */
  /* padding: 1px; */
  height: 50px;
	padding-top: 2px;
	padding-bottom: 2px;
	padding-right: 3px;
	font-size: 16px;
	background-color: #fff;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));



  input {
    /* Tell the input to use all the available space */
    flex-grow: 2;
    /* And hide the input's outline, so the form looks like the outline */
    border: none;
		padding-left: 8px;
  }

  /* remove the input focus blue box, it will be in the wrong place. */
  input:focus {
    outline: none;
  }

  /* Add the focus effect to the form so it contains the button */
  form:focus-within {
    outline: 1px solid blue;
  }

`;
 