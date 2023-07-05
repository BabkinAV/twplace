import styled from 'styled-components';

export const StyledIconButton = styled.button<{
  borderColor?: string;
}>`
  background-color: transparent;

  border: 1px solid ${props => props.borderColor};
  border-radius: 4px;
  padding: 6px;

  cursor: pointer;
`;