import styled from 'styled-components';

export const StyledRowDoubleColumns = styled.div`
  display: flex;
  align-items: center;
  max-width: 1366px;

  width: 100%;
  justify-content: space-between;
  
  & .column-left {
    display: flex;
    max-width: 296px;
    flex: 1 0 auto;
  }

  & .column-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;
    gap: 10px;
  }
  gap: 20px;
`;
