import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useAuth = () => {
    const { user, csrf, token, strategy } = useSelector(state => state.auth);

    return useMemo(() => ({ user, csrf, token, strategy }), [user, csrf, token, strategy]);
}
