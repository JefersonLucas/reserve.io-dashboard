import { useState } from "react";

function useModal() {
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return {
    isModalOpen,
    toggleModal,
  };
}

export default useModal;
