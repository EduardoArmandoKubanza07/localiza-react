import Modal from "react-modal";

Modal.setAppElement("#root");

export function Info({ isOpen, setIsOpen, children }) {
  function handleCloseInfoModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseInfoModal}
      overlayClassName="overlay-modal"
      className="content-modal"
    >
      {children}
    </Modal>
  );
}
