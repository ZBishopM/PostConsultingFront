import React, { useContext } from "react"
import { AuthContext ,AuthContextType} from "./AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext) as AuthContextType;
    const handleLogout = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/logout`, {
                method: 'POST',
                credentials: 'include', // important for sending cookies
            });

            if (response.ok) {
                // Clear user from local storage and context
                localStorage.removeItem('user');
                setUser(null);
                navigate('/login'); 
                toast.warn('Logout successful');
                // Optionally, redirect to login page
                // history.push('/login');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">
                        <a className="p-4" href="/">NAS Consulting</a>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {
                                user ? (
                                    <>
                                        <li>
                                            <button onClick={handleLogout}>
                                                Cerrar Sesión
                                            </button>
                                        </li>
                                        <li><a href="/">{user.name}</a></li>
                                    </>
                                ) : (
                                    <>
                                        <li><a href="/login">Iniciar sesión</a></li>
                                        <li><a href="/register">Regístrate</a></li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
                {/* Page content here */
                    children
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a href="/login">Iniciar sesión</a></li>
                    <li><a href="/register">Regístrate</a></li>
                    <li><a href="/posts">Proyectos</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar