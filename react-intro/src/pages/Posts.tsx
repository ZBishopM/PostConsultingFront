import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PostCard from "../components/PostCard"
import { useEffect, useState } from "react"
import axios from "axios"
import {Post} from "../interfaces/Post"
const Posts = () => {
    const [data, setData] = useState<Post[]>([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/posts`)
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
                <div className="m-auto  min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                    {
                        Array.isArray(data) && data.length > 0 ?(
                            data.map((item: Post) => (
                                <PostCard key={item.id} {...item}></PostCard>
                            ))
                        ):(
                                <p>No hay proyectos (aun)</p>
                            )
                    }
                </div>
            </Navbar>
            <Footer />
        </>
    )
}

export default Posts