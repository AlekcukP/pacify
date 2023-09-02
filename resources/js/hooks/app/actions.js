import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/app";

export const useSetTheme = () => {
    const dispatch = useDispatch();
    return useCallback((theme) => isSidebarOpen && dispatch(setTheme(theme)), []);
};
