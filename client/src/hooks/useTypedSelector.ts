import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;
