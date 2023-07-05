import { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { StyledModalLogin } from './ModalLogin.styles';
import { modalIsShownVar } from '../../../../cache/ModalISShown/modalIsShownVar';

const ModalLogin = () => {
  // const [modalIsShown, setModalIsShown] = useState(true);
  const modalIsShown = useReactiveVar(modalIsShownVar);
  return (
    <>
      {modalIsShown && (
        <StyledModalLogin>
          <div
            className="modal modal--login"
            onClick={() => modalIsShownVar(false)}
          >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
              <span className="close" onClick={() => modalIsShownVar(false)}>
                &times;
              </span>
              <p>Modal content 1</p>
            </div>
          </div>
        </StyledModalLogin>
      )}
    </>
  );
};

export default ModalLogin;
