import { MouseEventHandler, ReactNode } from 'react';
import { StyledButtonFilled } from './ButtonFilled.styles';
import Spinner from '../../Spinner/Spinner';

const ButtonFilled = ({
  children,
  onClick,
  className,
  type,
  loading,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  loading?: boolean;
}) => {
  return (
    <StyledButtonFilled onClick={onClick} className={className} type={type}>
      {loading ? (
        <>
          <span>&nbsp;</span>
          <Spinner fill='white'/>
        </>
      ) : (
        children
      )}
    </StyledButtonFilled>
  );
};

export default ButtonFilled;
