export const TOKEN_KEY = "encurtador-token";
export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY !== null);
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
export const setUser = (user) => localStorage.setItem("user", user);
export const getUser = () => localStorage.getItem("user");