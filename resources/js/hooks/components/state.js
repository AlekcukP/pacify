import { useMemo } from 'react'
import { useSelector } from 'react-redux';

export const useComponentsState = () => {
    const { isLoading, isPasswordDisplayed, isSidebarOpen } = useSelector(state => state.components);

    return useMemo(() => ({ isLoading, isPasswordDisplayed, isSidebarOpen }), [isLoading, isPasswordDisplayed, isSidebarOpen]);
}

