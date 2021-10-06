import { useState } from "react";

export const useModal = (flag: boolean) => {
  const [open, setIsOpen] = useState<boolean>(flag);
  const onClose = () => {
    setIsOpen((prev) => !prev);
  };
  return { open, onClose };
};
