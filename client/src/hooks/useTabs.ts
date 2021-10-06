import { ChangeEvent, useState } from "react";

const useTabs = (initialValue: string) => {
  const [value, setTabValue] = useState<string>(initialValue);
  const onChange = (_: ChangeEvent, _value: string) => {
    setTabValue(_value);
  };
  return { value, onChange };
};
export default useTabs;
