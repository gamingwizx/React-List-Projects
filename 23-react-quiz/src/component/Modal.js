function Modal({ children, classname }) {
  return <div className={`modal-parent ${classname}`}>{children}</div>;
}

export default Modal;
