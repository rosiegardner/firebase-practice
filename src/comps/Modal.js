import React from 'react';

const Modal = ({ selectedImg }) => {

  return (
    <div className="backdrop">
      <img src={selectedImg} alt="enlarge" />
    </div>
  )

}

export default Modal;