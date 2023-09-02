import { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useTheme } from "flowbite-react";
import darkLogo from '../../../assets/images/logo.svg'
import whiteLogo from '../../../assets/images/white-logo.svg'

export const useThemeState = () => {
    const { mode } = useTheme();
    const logo = mode === 'dark' ? whiteLogo : darkLogo;

    return useMemo(() => ({ logo: logo, mode: mode }), [mode]);
};

export const useAppState = () => {
    const { theme } = useSelector(state => state.app);

    return useMemo(() => ({ theme }), [theme]);
};
