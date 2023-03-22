import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  function hideModalHandler() {
    setShowModal(false);
  }

  return (
    <ModalContext.Provider
      value={{ showModal, showModalHandler, hideModalHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
}

// custom hook to consume the modal context anywhere in our app
export function useModalContext() {
  return useContext(ModalContext);
}
