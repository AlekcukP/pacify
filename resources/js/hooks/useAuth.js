import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useAuth = () => {
    const { user, csrf, token, authenticated } = useSelector(state => state.auth);

    return useMemo(() => ({ user, csrf, token, authenticated }), [user, csrf, token, authenticated]);
}
