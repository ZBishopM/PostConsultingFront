import { toast } from "react-toastify";
import { User } from "../interfaces/User"
import { useEffect, useState } from "react";
import { Post } from "../interfaces/Post";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostForm({ user, edit, postPassed }: { user: User, edit: boolean, postPassed?: Post }) {

    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent) => {
        event.preventDefault();
        const post: Post = {
            title,
            description,
            user
        }
        if (title === '' || description === '') {
            toast.error("Todos los campos son obligatorios");
            return;
        }
        if (edit&&postPassed) {
            const token = localStorage.getItem('token');
            await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/posts/edit/${postPassed.id}`, post, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    navigate('/posts');
                    toast.success("Publicación '"+response.data.title +"' actualizada");
                    //const data: Post[] = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
            return
        }
        await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/posts`, post, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

            .then(response => {
                if (response.status === 200) {
                    navigate('/posts');
                    toast.success("Publicación creada");
                }
            })
            .catch(error => {
                toast.error("Error al crear la publicación " + error.response.data.error);
            });
    }
    useEffect(() => {
        if (edit&&postPassed) {
            setTitle(postPassed.title);
            setDescription(postPassed.description);
        }
    }, [edit, postPassed]);
    return (
        <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Título del proyecto</span>
                </div>
                <input type="text" placeholder="Título del proyecto" className="input input-bordered w-full max-w-xs"

                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Descripción del proyecto</span>
                </div>
                <textarea
                    placeholder="Descripción"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs"

                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label className="input input-bordered input-lg flex items-center gap-2">
                <input type="text" className="grow" placeholder="URL de la imagen" />
                <span className="badge badge-info">Opcional</span>
            </label>
            <button className='btn btn-primary' onClick={handleSubmit} >Subir proyecto</button>
        </div>
    )
}

export default PostForm