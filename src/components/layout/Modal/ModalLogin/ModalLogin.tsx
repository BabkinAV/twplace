import { useState } from 'react';
import { StyledModalLogin } from './ModalLogin.styles';

const ModalLogin = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  return (
    <>
      {modalIsShown && (
        <StyledModalLogin>
          <div className="modal modal--login">
            <div className="modal__content">
              <span className="close">&times;</span>
              <p>Modal content</p>
            </div>
          </div>
        </StyledModalLogin>
      )}
    </>
  );
};

export default ModalLogin;
