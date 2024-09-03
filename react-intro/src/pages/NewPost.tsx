import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';

function NewPost() {

    const { user } = useContext(AuthContext);
    return (
        <>
            <Navbar>
                {
                    user&&
                    <PostForm user={user} edit={false}/>
                }
            </Navbar>
            <Footer />
        </>
    )
}

export default NewPost