import { createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (text?: string) => void;
  closeModal: () => void;
  type: string;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);
