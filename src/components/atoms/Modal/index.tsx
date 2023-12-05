import { ReactNode } from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={classNames(styles.modalOverlay, {
        [styles.closed]: !isOpen,
      })}
    >
      <div className={styles.modal}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default Modal;
