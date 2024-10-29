import { ReactNode, useState } from "react";
import { ModalContext } from "./index";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const openModal = (value?: string) => {
    setIsOpen(true);
    if (value) {
      setType(value);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const value = { isOpen, openModal, closeModal, type };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
