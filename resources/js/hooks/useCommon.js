import { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useTheme } from "flowbite-react";
import darkLogo from "../../assets/images/logo.svg";
import whiteLogo from "../../assets/images/white-logo.svg";

export const useCommon = () => {
    const { isLoading, isPasswordDisplayed, isSidebarOpen } = useSelector(state => state.common);

    return useMemo(() => ({ isLoading, isPasswordDisplayed, isSidebarOpen }), [isLoading, isPasswordDisplayed, isSidebarOpen]);
}

export const useLogo = () => {
    const { mode } = useTheme();
    const logo = mode === 'dark' ? whiteLogo : darkLogo;

    return useMemo(() => (logo), [mode]);
};
