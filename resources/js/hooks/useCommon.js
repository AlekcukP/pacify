import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useCommon = () => {
    const { isLoading, isPasswordDisplayed } = useSelector(state => state.common);

    return useMemo(() => ({ isLoading, isPasswordDisplayed }), [isLoading, isPasswordDisplayed]);
}
