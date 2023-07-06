import styled from 'styled-components';

export const StyledModal = styled.div`
  .modal {
    position: fixed;
    position: fixed; /* Stay in place */
    z-index: 10; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */

    /* Modal Content */
    .modal__content {
      background-color: #fff;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 50%;
			max-width: 684px;
      position: relative;
    }

    /* The Close Button */
    .close {
      color: #aaaaaa;
      position: absolute;
      right: 20px;
      top: 0;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
