import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogInForm() {
    const navigate = useNavigate();
    const [user, setUser]=useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setUser( {
            email: email,
            password: password,
        });
        console.log(JSON.stringify(user));
        axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/login`, user)
            .then(response => {
                console.log(response.data);
                toast.success("Sesión iniciada");
                setUser(response.data);
                localStorage.setItem('userInfo', JSON.stringify(response.data));
                navigate('/posts'); 
            })
            .catch(error => {
                if(error.response.status === 409) {
                    toast.error("Credenciales incorrectas");
                }
                else{
                    toast.error("Error al iniciar sesión");
                }
            });
    }
    return (
        <>
            <div className='min-h-screen'>
                <div className='flex justify-center min-h-[6rem]'>
                    <div className="flex flex-col xs:w-1/4 sm:w-3/4 md:w-3/4 lg:w-1/2 gap-7 bg-base-200 p-6 my-6 rounded-lg">
                    <h1 className="text-3xl font-bold">Iniciar Sesión </h1>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input required type="text" className="grow" placeholder="Correo electrónico" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input required type="password" className="grow" value={password}
                                placeholder='Contraseña'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button onClick={handleSubmit} className='btn btn-primary'>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogInForm