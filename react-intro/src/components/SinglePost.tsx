import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../interfaces/Post';
import PostForm from './PostForm';
import { AuthContext } from './AuthContext';

function SinglePost() {
    const [post, setPost] = useState<Post>({ id: 0, title: '', description: '' });
    const { slug } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/posts/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setPost(response.data);
                //const data: Post[] = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }, [slug]);

    const deletePost = async (id: number) => {
        const token = localStorage.getItem('token');
        await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/posts/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setPost(response.data);
                navigate('/posts');
                //const data: Post[] = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <>
            <div className="min-h-screen place-items-center">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="font-bold mb-5 text-5xl">{post.title}</h1>
                            <p className="mb-5">
                                {post.description}.
                            </p>
                            <button className='btn' onClick={() => { deletePost(post.id ?? 0) }}>eliminar</button>
                            <button className="btn" onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}>open modal</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Editar Post</h3>{
                                        user && post&&
                                        <PostForm user={user} edit={true} postPassed={post}></PostForm>
                                    }
                                    <p className="py-4">Presiona ESC o clickea afuera para salir</p>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default SinglePost