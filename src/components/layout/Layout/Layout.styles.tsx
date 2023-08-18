import styled from 'styled-components';

export const StyledLayout = styled.div`
  //Layout shift compensation due to scrollbar appear https://dev.to/rashidshamloo/preventing-the-layout-shift-caused-by-scrollbars-2flp
	padding-left: calc(100vw - 100%);
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
`;
