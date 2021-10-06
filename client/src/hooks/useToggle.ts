import { useState } from "react";

export const useToggle = (
  flag: boolean
): [isOpen: boolean, onClick: () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(flag);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return [isOpen, onClick];
};
