import { useReactiveVar } from '@apollo/client';
import { ReactNode } from 'react';
import { modalIsShownVar } from '../../../cache/ModalISShown/modalIsShownVar';
import { StyledModal } from './Modal.styles';

const Modal = ({ children }: { children: ReactNode }) => {
  const modalIsShown = useReactiveVar(modalIsShownVar);
  return (
    <>
      {modalIsShown && (
        <StyledModal>
          <div
            className="modal modal--login"
            onClick={() => modalIsShownVar(false)}
          >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
              <span className="close" onClick={() => modalIsShownVar(false)}>
                &times;
              </span>
              <div>{children}</div>
            </div>
          </div>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;
