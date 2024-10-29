import { createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (text?: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);
