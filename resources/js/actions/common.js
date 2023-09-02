import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../redux/common";
import { useCommon } from "../hooks/useCommon";

export const useCloseSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useCommon();

    return useCallback(
        () => isSidebarOpen && dispatch(setSidebarOpen(false)),
        [isSidebarOpen]
    );
};

export const useOpenSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useCommon();

    return useCallback(
        () => isSidebarOpen && dispatch(setSidebarOpen(true)),
        [isSidebarOpen]
    );
};
