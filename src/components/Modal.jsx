import { Fragment } from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import { useModalContext } from "../context/modal-context";
import "./modal.css";

const Modal = ({ className, children }) => {
  const { showModal, hideModalHandler } = useModalContext();
  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={hideModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
