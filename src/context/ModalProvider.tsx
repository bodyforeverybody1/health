import { ReactNode, useState } from "react";
import { ModalContext } from "./index";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const value = { isOpen, openModal, closeModal };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
