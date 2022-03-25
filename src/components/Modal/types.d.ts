export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface CloseProps {
  onClick: () => void;
}
