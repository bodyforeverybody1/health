import { ReactNode, useEffect, useState } from "react";
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
