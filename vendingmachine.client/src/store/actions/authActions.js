export const login = () => ({
    type: 'LOGIN',
    payload: { admin: true },
});

export const logout = () => ({
    type: 'LOGOUT',
});