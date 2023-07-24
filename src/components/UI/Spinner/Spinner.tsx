import Image from 'next/image';
import React from 'react';
import { StyledSpinner } from './Spinner.styles';
import SpinnerIcon from '../../assets/images/Spinner.svg'


const Spinner = () => {
  return (
    <StyledSpinner className='spinner'>
			<Image src={SpinnerIcon} alt="Spinner Icon" className='spinner__image'/>
    </StyledSpinner>
  );
};

export default Spinner;