import React from "react"
import { createContext, useState, useEffect } from "react"
import { User } from "../interfaces/User";

type NullableInterface<T> = (T | null)
export interface AuthContextType {
    user: NullableInterface<User>;
    setUser:(user: User) => void
}
export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {}
});
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<NullableInterface<User>>(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('userInfo');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}