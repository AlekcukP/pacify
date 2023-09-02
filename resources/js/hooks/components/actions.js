import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openSidebar, closeSidebar, startLoading, displayPassword, hidePassword, stopLoading } from "../../redux/components";
import { useComponentsState } from "./state";

export const useCloseSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useComponentsState();

    return useCallback(
        () => isSidebarOpen && dispatch(openSidebar()),
        [isSidebarOpen]
    );
};

export const useOpenSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useComponentsState();

    return useCallback(
        () => isSidebarOpen && dispatch(closeSidebar()),
        [isSidebarOpen]
    );
};
export const useStartLoading = () => {
    const dispatch = useDispatch();

    return useCallback(() => dispatch(startLoading()), []);
};

export const useStopLoading = () => {
    const dispatch = useDispatch();

    return useCallback(() => dispatch(stopLoading()), []);
};

export const useDisplayPassword = () => {
    const dispatch = useDispatch();

    return useCallback(() => dispatch(displayPassword()), []);
};

export const useHidePassword = () => {
    const dispatch = useDispatch();

    return useCallback(() => dispatch(hidePassword()), []);
};
