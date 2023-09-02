import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useCommon = () => {
    const { isLoading, isPasswordDisplayed, isSidebarOpen } = useSelector(state => state.common);

    return useMemo(() => ({ isLoading, isPasswordDisplayed, isSidebarOpen }), [isLoading, isPasswordDisplayed, isSidebarOpen]);
}
