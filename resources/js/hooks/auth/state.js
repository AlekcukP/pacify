import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useAuthState = () => {
    const { user, token, authenticated } = useSelector(state => state.auth);

    return useMemo(() => ({ user, token, authenticated }), [user, token, authenticated]);
}
