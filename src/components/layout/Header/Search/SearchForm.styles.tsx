import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: row;
	min-width: 500px;
	/* align-self: center; */

  /* This bit draws the box around it */
  border: solid;  border-image: linear-gradient(to right, #F64D4D, #4D5EF6) 1 / 2px;

  /* I've used padding so you can see the edges of the elements. */
  padding: 1px;
	height: 46px;

  input {
    /* Tell the input to use all the available space */
    flex-grow: 2;
    /* And hide the input's outline, so the form looks like the outline */
    border: none;
  }

  /* remove the input focus blue box, it will be in the wrong place. */
  input:focus {
    outline: none;
  }

  /* Add the focus effect to the form so it contains the button */
  form:focus-within {
    outline: 1px solid blue;
  }

  button {
    /* Just a little styling to make it pretty */
    border: 1px solid blue;
    background: blue;
    color: white;
  }
`;
