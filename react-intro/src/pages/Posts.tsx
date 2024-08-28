import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PostCard from "../components/PostCard"
import { Post } from "../interfaces/Post"
import { AuthContext, AuthContextType } from "../components/AuthContext"
const Posts = () => {
    const [data, setData] = useState<Post[]>([]);
    const { user } = useContext(AuthContext) as AuthContextType;
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/posts`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setData(response.data);
                //const data: Post[] = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <Navbar>
                <h1 className="text-3xl p-4">Proyectos hasta ahora: {data.length}</h1>
                <div className="divider"></div>
                {user?.role === 'ROLE_USER'?(
                    <button className="btn btn-primary max-w-sm m-auto"><a href="/posts/new">Agregar proyecto</a></button>
                ):(
                    <></>
                )}
                <br />
                <div className={Array.isArray(data) && data.length > 0 ?"m-auto min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center":"m-auto min-h-screen flex flex-col gap-7"}>
                    {
                        Array.isArray(data) && data.length > 0 ?(
                            data.map((item: Post) => (
                                <PostCard key={item.id} {...item}></PostCard>
                            ))
                        ):(
                            <>
                            <h1 className="text-3xl">Únete para ver los proyectos</h1>
                            <button className="btn btn-primary" onClick={() => window.location.href = '/register'}>Únete</button>
                            </>
                            )
                    }
                </div>
            </Navbar>
            <Footer />
        </>
    )
}

export default Posts