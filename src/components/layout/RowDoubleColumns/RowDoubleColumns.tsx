import React, { ReactNode } from 'react';
import { StyledRowDoubleColumns } from './RowDoubleColumns.styles';

const RowDoubleColumns = ({ children }: { children: ReactNode }) => {
  return <StyledRowDoubleColumns>{children}</StyledRowDoubleColumns>;
};

export default RowDoubleColumns;
