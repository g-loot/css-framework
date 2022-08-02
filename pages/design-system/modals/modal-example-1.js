import React, { useContext, useState } from 'react';

import { UiContext } from '../../../contexts/ui.js';

const Modal1 = (props) => {
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  function okHandler() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }
  return (
    <div>
      <h1>Modal 1</h1>
      <p>This is the content of Modal1 component</p>
      {submitting && <span>...Submitting</span>}
      {!submitting && (
        <button type='button' onClick={okHandler}>
          Ok
        </button>
      )}
    </div>
  );
};

export default Modal1;